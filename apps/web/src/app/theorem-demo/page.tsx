
import TheoremProof from "@/components/mathematics/TheoremProof";
import CircleGraph from "@/components/mathematics/CircleGraph";

export default function TheoremDemoPage() {
  return (
    <main
      dir="rtl"
      lang="fa"
      className="min-h-screen bg-sky-50 px-4 py-12"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold text-blue-900">
          آموزش قضیه‌های ریاضی
        </h1>

        <p className="mb-8 leading-8 text-slate-700">
          بیایید معادلهٔ دایره را با استفاده از قضیهٔ
          فیثاغورس، گام‌به‌گام اثبات کنیم.
        </p>

        <TheoremProof
          title="قضیهٔ معادلهٔ دایره"
          statement="هر نقطهٔ دایره‌ای که مرکز آن مبدأ مختصات و شعاع آن r باشد، معادلهٔ x² + y² = r² را برآورده می‌سازد."
          steps={[
            {
              title: "انتخاب یک نقطه",
              explanation:
                "نقطهٔ P را با مختصات (x, y) روی دایره انتخاب می‌کنیم. فاصلهٔ این نقطه تا مرکز دایره برابر شعاع r است.",
              formula: "OP = r",
            },
            {
              title: "ساختن مثلث قائم‌الزاویه",
              explanation:
                "از نقطهٔ P یک خط عمود بر محور افقی رسم می‌کنیم. دو ضلع قائم مثلث طول‌های |x| و |y| دارند.",
            },
            {
              title: "استفاده از قضیهٔ فیثاغورس",
              explanation:
                "در مثلث قائم‌الزاویه، مجموع مربع‌های دو ضلع قائم برابر مربع وتر است.",
              formula: "x² + y² = OP²",
            },
            {
              title: "جای‌گذاری شعاع",
              explanation:
                "چون فاصلهٔ نقطهٔ P تا مرکز برابر r است، مقدار OP را با r عوض می‌کنیم.",
              formula: "x² + y² = r²",
            },
          ]}
          conclusion="بنابراین هر نقطهٔ دایره با مرکز (0,0) و شعاع r معادلهٔ x² + y² = r² را برآورده می‌سازد. برعکس، برای r مثبت، هر نقطه‌ای که این معادله را برآورده کند، روی همان دایره قرار دارد."
        />
        <CircleGraph />
      </div>
    </main>
  );
}
