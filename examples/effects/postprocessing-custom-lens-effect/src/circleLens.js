import React, { forwardRef, useMemo } from "react";
import { CircleLensEffect } from "./circleLensEffect";

export const CircleLens = forwardRef(({ fragments = 5 }, ref) => {
  const effect = useMemo(() => new CircleLensEffect(fragments), [fragments]);
  return <primitive ref={ref} object={effect} dispose={null} />;
});
