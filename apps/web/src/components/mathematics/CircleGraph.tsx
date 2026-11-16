
"use client";

import { useState } from "react";

type CircleGraphProps = {
  radius?: number;
  onRadiusChange?: (radius: number) => void;
};

export default function CircleGraph({
  radius: controlledRadius,
  onRadiusChange,
}: CircleGraphProps) {
  const [localRadius, setLocalRadius] = useState(3);
  const [angle, setAngle] = useState(45);

  const radius = controlledRadius ?? localRadius;

  const setRadius = (value: number) => {
    if (controlledRadius === undefined) {
      setLocalRadius(value);
    }
    onRadiusChange?.(value);
  };

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

        {/* Right-angled triangle for the Pythagorean proof */}
        <line
          x1={cx}
          y1={cy}
          x2={px}
          y2={cy}
          stroke="#0d9488"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />

        <line
          x1={px}
          y1={cy}
          x2={px}
          y2={py}
          stroke="#0d9488"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />

        <path
          d={`M ${px < cx ? px + 10 : px - 10} ${cy} V ${
            py < cy ? cy - 10 : cy + 10
          } H ${px}`}
          fill="none"
          stroke="#0f766e"
          strokeWidth="1.5"
        />
        {/* Side lengths of the right-angled triangle */}
        {Math.abs(px - cx) > 25 && (
          <text
            x={(cx + px) / 2}
            y={cy + (py < cy ? 19 : -12)}
            textAnchor="middle"
            fontSize="13"
            fill="#0f766e"
          >
            |x|
          </text>
        )}

        {Math.abs(py - cy) > 25 && (
          <text
            x={px + (px < cx ? -12 : 12)}
            y={(cy + py) / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13"
            fill="#0f766e"
          >
            |y|
          </text>
        )}
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



