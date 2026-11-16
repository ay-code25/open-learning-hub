
"use client";

import { useState } from "react";

export default function CircleGraph() {
  const [radius, setRadius] = useState(3);
  const [angle, setAngle] = useState(45);

  const scale = 32;
  const cx = 180;
  const cy = 180;
  const radians = (angle * Math.PI) / 180;

  const px = cx + radius * scale * Math.cos(radians);
  const py = cy - radius * scale * Math.sin(radians);

  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);

  return (
    <section
      dir="rtl"
      className="my-8 rounded-3xl border border-blue-200 bg-white p-5 shadow-sm"
    >
      <h2 className="mb-2 text-xl font-bold text-blue-900">
        گراف تعاملی دایره
      </h2>

      <p className="mb-5 leading-8 text-slate-700">
        شعاع یا زاویه را تغییر دهید و حرکت نقطه روی دایره
        را مشاهده کنید.
      </p>

      <svg
        viewBox="0 0 360 360"
        role="img"
        aria-label="Interactive circle showing its radius and a point"
        className="mx-auto w-full max-w-md rounded-2xl bg-blue-50"
      >
        <line x1="20" y1={cy} x2="340" y2={cy} stroke="#94a3b8" />
        <line x1={cx} y1="20" x2={cx} y2="340" stroke="#94a3b8" />

        <circle
          cx={cx}
          cy={cy}
          r={radius * scale}
          fill="#dbeafe"
          fillOpacity="0.7"
          stroke="#2563eb"
          strokeWidth="3"
        />

        <line
          x1={cx}
          y1={cy}
          x2={px}
          y2={py}
          stroke="#f97316"
          strokeWidth="3"
        />

        <circle cx={cx} cy={cy} r="4" fill="#0f172a" />
        <circle cx={px} cy={py} r="6" fill="#e11d48" />

        <text x={cx + 8} y={cy + 18} fontSize="13" fill="#0f172a">
          O
        </text>

        <text
          x={px + 10}
          y={py - 10}
          fontSize="14"
          fontWeight="bold"
          fill="#be123c"
        >
          P
        </text>
      </svg>

      <div className="mt-6 space-y-5">
        <label className="block font-semibold text-slate-800">
          شعاع: {radius}
          <input
            type="range"
            min="1"
            max="4"
            step="0.1"
            value={radius}
            onChange={(event) => setRadius(Number(event.target.value))}
            className="mt-3 w-full accent-blue-600"
          />
        </label>

        <label className="block font-semibold text-slate-800">
          زاویه: {angle}°
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
            className="mt-3 w-full accent-orange-500"
          />
        </label>
      </div>

      <div
        dir="ltr"
        className="mt-6 rounded-xl bg-slate-900 p-5 text-center font-mono text-lg text-white"
      >
        <p>x² + y² = {Number((radius * radius).toFixed(2))}</p>
        <p className="mt-2 text-sm text-slate-200">
          P = ({x.toFixed(2)}, {y.toFixed(2)})
        </p>
      </div>
    </section>
  );
}
