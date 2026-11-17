
"use client";

import { useState } from "react";
import MathEquation from "./MathEquation";

export type ProofStep = {
  title: string;
  explanation: string;
  formula?: string;
};

type TheoremProofProps = {
  title: string;
  statement: string;
  steps: ProofStep[];
  conclusion: string;
  currentStep?: number;
  onStepChange?: (step: number) => void;
};

export default function TheoremProof({
  title,
  statement,
  steps,
  conclusion,
  currentStep,
  onStepChange,
}: TheoremProofProps) {
  const [localStep, setLocalStep] = useState(0);
  const visibleSteps = currentStep ?? localStep;

  const setVisibleSteps = (
    update: number | ((previous: number) => number)
  ) => {
    const next =
      typeof update === "function"
        ? update(visibleSteps)
        : update;

    const safeNext = Math.max(0, Math.min(next, steps.length));

    if (currentStep === undefined) {
      setLocalStep(safeNext);
    }

    onStepChange?.(safeNext);
  };

  const completed = visibleSteps === steps.length;

  return (
    <section
      dir="rtl"
      lang="fa"
      className="my-8 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-lg"
    >
      <header className="bg-violet-700 p-6 text-white">
        <span className="text-sm font-semibold text-violet-100">
          قضیه و اثبات ریاضی
        </span>

        <h2 className="mt-3 text-2xl font-bold">
          {title}
        </h2>
      </header>

      <div className="space-y-6 p-5 sm:p-8">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="font-bold text-blue-900">
            قضیه چیست؟
          </h3>

          <p className="mt-3 leading-8 text-slate-800">
            {statement}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            اثبات گام‌به‌گام
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            هر مرحله را بخوانید و سپس مرحلهٔ بعدی را باز کنید.
          </p>
        </div>

        {steps.slice(0, visibleSteps).map((step, index) => (
          <article
            key={index}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </span>

              <h4 className="font-bold text-slate-900">
                {step.title}
              </h4>
            </div>

            <p className="leading-8 text-slate-800">
              {step.explanation}
            </p>

            {step.formula && (
              <div
                dir="ltr"
                className="mt-4 overflow-x-auto rounded-xl border border-blue-200 bg-white p-5 text-center font-mono text-lg font-semibold text-blue-950"
              >
                <MathEquation equation={step.formula} />
              </div>
            )}
          </article>
        ))}

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            disabled={completed}
            onClick={() =>
              setVisibleSteps((current) =>
                Math.min(current + 1, steps.length)
              )
            }
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            مرحلهٔ بعدی
          </button>

          <button
            type="button"
            onClick={() =>
              setVisibleSteps(completed ? 0 : steps.length)
            }
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100"
          >
            {completed ? "شروع دوباره" : "نمایش تمام مراحل"}
          </button>
        </div>

        {completed && (
          <div
            role="status"
            className="rounded-2xl border border-green-200 bg-green-50 p-5"
          >
            <h3 className="font-bold text-green-800">
              نتیجهٔ اثبات
            </h3>

            <p className="mt-3 leading-8 text-green-950">
              {conclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
