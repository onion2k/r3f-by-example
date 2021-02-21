import { Uniform, Vector2 } from "three";
import { Effect } from "postprocessing";

const fragmentShader = `
  uniform bool active;
  uniform float fragments;

  vec2 rotatePoint(in vec2 pt, in vec2 center, in float angle) {
    float sinAngle = sin(angle);
    float cosAngle = cos(angle);
    pt -= center;
    vec2 r = vec2(pt.x * cosAngle - pt.y * sinAngle, pt.x * sinAngle + pt.y * cosAngle);
    r += center;
    return r;
  }

  void mainUv(inout vec2 uv) {

    if(active) {

      float circle = length(uv - 0.5);

      uv = rotatePoint(
        uv.xy,
        vec2(0.5, 0.5),
        0.1 * (1. - (mod(floor(circle * fragments), 2.)))
      );

    }

  }
`;

/**
 * A circular lensing effect.
 */

export class CircleLensEffect extends Effect {
  constructor(fragments = 5.0) {
    super("CircleLensEffect", fragmentShader, {
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
