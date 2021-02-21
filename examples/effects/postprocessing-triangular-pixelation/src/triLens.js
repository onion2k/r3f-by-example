import React, { forwardRef, useMemo } from "react";
import { TriangularLensEffect } from "./triLensEffect";

export const TriangularLens = forwardRef(({ fragments = 153 }, ref) => {
  const effect = useMemo(() => new TriangularLensEffect(fragments), [
    fragments
  ]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
