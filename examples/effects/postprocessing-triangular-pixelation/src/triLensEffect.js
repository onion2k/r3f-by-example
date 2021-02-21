import { Uniform, Vector2 } from "three";
import { Effect } from "postprocessing";

const fragmentShader = `
  uniform bool active;
  uniform float fragments;

  float rand(vec2 uv)
  {
      return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
  }

  vec2 uv2tri(vec2 uv)
  {
      float sx = uv.x - uv.y / 2.;
      float sxf = fract(sx);
      float offs = step(fract(1. - uv.y), sxf);
      return vec2(floor(sx) * 2. + sxf + offs, uv.y);
  }

  float tri(vec2 uv)
  {
      float sp = .3 * rand(floor(uv2tri(uv)));
      return max(0., sin(sp));
  }

  void mainUv(inout vec2 uv)
  {
      float t1 = 1.5;
      float c1 = tri(uv * (1. + fragments * fract(t1)) + floor(t1));
      uv.x += c1 * 0.1;
  }

`;

/**
 * A triangular lensing effect.
 */

export class TriangularLensEffect extends Effect {
  constructor(fragments = 153.0) {
    super("TriangularLensEffect", fragmentShader, {
      uniforms: new Map([
        ["active", new Uniform(false)],
        ["fragments", new Uniform(Number)]
      ])
    });

    this.resolution = new Vector2();

    this.fragments = fragments;
  }

  getFragments() {
    return this.fragments;
  }

  setFragments(fragments) {
    fragments = Math.floor(fragments);

    const uniforms = this.uniforms;
    uniforms.get("active").value = fragments > 0.0;
    uniforms.get("fragments").value = fragments;

    this.fragments = fragments;
  }

  setSize(width, height) {
    this.resolution.set(width, height);
    this.setFragments(this.fragments);
  }
}
