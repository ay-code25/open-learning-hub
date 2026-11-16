"use client";

import { useState } from "react";
import CircleGraph from "./CircleGraph";
import MathEquation from "./MathEquation";

export default function InteractiveCircleLesson() {
  const [radius, setRadius] = useState(3);

  const radiusSquared = Number((radius * radius).toFixed(2));

  return (
    <section dir="rtl" className="space-y-5">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-xl font-bold text-emerald-900">
          رابطهٔ شعاع و معادلهٔ دایره
        </h2>

        <p className="mt-3 leading-8 text-slate-800">
          شعاع دایره را تغییر دهید. مشاهده کنید که مربع شعاع
          چگونه مقدار سمت راست معادله را تغییر می‌دهد.
        </p>

        <MathEquation
          equation={`x^2 + y^2 = (${radius})^2 = ${radiusSquared}`}
        />
      </div>

      <CircleGraph
        radius={radius}
        onRadiusChange={setRadius}
      />
    </section>
  );
}
