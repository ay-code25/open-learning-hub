
import Link from "next/link";

const topics = [
  {
    symbol: "◯",
    title: "دایره",
    description: "با مرکز، شعاع و معادلهٔ دایره آشنا شوید.",
    color: "bg-sky-100 text-blue-700",
  },
  {
    symbol: "⬭",
    title: "بیضوی",
    description: "دو محراق و خواص هندسی بیضوی را کشف کنید.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    symbol: "∪",
    title: "پارابولا",
    description: "رابطهٔ محراق، خط رهنما و گراف را بیاموزید.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    symbol: ")( ",
    title: "هایپربولا",
    description: "دو شاخه، محراق‌ها و خطوط مجانب را بررسی کنید.",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function Home() {
  return (
    <div
      lang="fa"
      dir="rtl"
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
          <div className="text-xl font-bold text-blue-800">
            ∑ کتابخانهٔ ریاضی
          </div>
          <span className="text-sm text-slate-500">
            آموزش آزاد و تعاملی
          </span>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-bl from-blue-100 via-white to-cyan-50 px-5 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              ریاضی را ببینید، تجربه کنید و بیاموزید
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              مقاطع مخروطی و مختصات قطبی
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-600">
              یک محیط آموزشی برای یادگیری ریاضی با استفاده از
              گراف‌های تعاملی، مثال‌های تصویری، اثبات قضیه‌ها
              و تمرین‌های گام‌به‌گام.
            </p>

            <Link
              href="https://ay-code25.github.io/open-learning-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-2xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              آغاز یادگیری
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-9">
            <h2 className="text-3xl font-bold">
              موضوعات آموزشی
            </h2>
            <p className="mt-3 text-slate-600">
              هر شکل را بشناسید و خواص ریاضی آن را بررسی کنید.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div
                  className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl text-5xl font-bold ${topic.color}`}
                >
                  {topic.symbol}
                </div>

                <h3 className="text-xl font-bold">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-950 px-5 py-16 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">
              یادگیری با مشاهده و تجربه
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-9 text-blue-100">
              مقدارها را تغییر دهید، تغییرات گراف را مشاهده کنید
              و رابطهٔ میان معادلات و شکل‌های هندسی را بهتر درک کنید.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500">
        کتابخانهٔ آزاد آموزش ریاضی
      </footer>
    </div>
  );
}
