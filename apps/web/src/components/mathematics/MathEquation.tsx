"use client";

import { useMemo } from "react";
import katex from "katex";

type MathEquationProps = {
  equation: string;
  displayMode?: boolean;
};

export default function MathEquation({
  equation,
  displayMode = true,
}: MathEquationProps) {
  const html = useMemo(() => {
    return katex.renderToString(equation, {
      displayMode,
      throwOnError: false,
      output: "htmlAndMathml",
      trust: false,
      strict: "warn",
    });
  }, [equation, displayMode]);

  return (
    <div
      dir="ltr"
      className="max-w-full overflow-x-auto py-3 text-slate-900"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
