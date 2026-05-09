export default function Home() {
  return (
    <div className="bg-[#f3f3f3] text-black">
      <section className="border-b border-black/5">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="order-2 min-w-0 md:order-1">
            <h1 className="text-center text-2xl font-semibold tracking-tight text-zinc-600 md:text-left md:text-3xl">
              Trusted Payments, Limitless Opportunities
            </h1>
            <p className="mt-3 text-center text-2xl font-semibold tracking-tight text-[#2E86FF] md:text-left md:text-3xl">
              ANYTAP CARD
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="/tapayz-card"
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2E86FF] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#2E86FF]/90"
              >
                ORDER NOW
              </a>
            </div>
          </div>

          <div className="order-1 flex min-w-0 w-full justify-center md:order-2">
            <div
              className="relative mx-auto w-full max-w-[420px]"
              style={{ aspectRatio: "340 / 260" }}
            >
              <img
                src="/uploads/2025/01/image-6.png"
                alt="Anytap app"
                className="absolute left-0 top-1/2 max-h-[92%] w-[58%] max-w-[58%] -translate-y-1/2 object-contain object-left"
              />
              <img
                src="/uploads/2025/01/card_main_1.png"
                alt="Anytap card"
                className="absolute right-[2%] top-[28%] max-h-[52%] w-[44%] max-w-[44%] object-contain object-right"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-6 opacity-80 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            <img
              src="/uploads/2025/01/Group-7.png"
              alt="Partner logo strip"
              className="h-auto max-h-8 w-full object-contain sm:h-7 sm:w-auto sm:max-w-full"
            />
            <img
              src="/uploads/2025/01/Group-16.png"
              alt="Partner logo strip 2"
              className="h-auto max-h-28 w-full object-contain sm:max-h-40 sm:w-auto sm:max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#3a3a3a] text-white">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="flex w-full min-w-0 justify-center">
            <video
              src="/uploads/2025/01/KakaoTalk_20250117_083000936_1.mp4"
              className="h-auto w-full max-w-md rounded-xl bg-black object-contain shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="min-w-0 w-full">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Pay anytime <br />
              anywhere with your <br />
              Crypto or Fiat.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
              Pay easily with your Anytap card and use your balance wherever you
              need it, whenever you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2E86FF] text-white">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Why should you elect an Anytap card?
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-sm md:grid-cols-2">
            {[
              "Fast and easy membership process",
              "Your card delivery (3–5 days)",
              "Competitive fees",
              "No hidden fees",
              "Anonymous card",
              "High balance limits",
              "Marketplace service",
              "Worldwide payments",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/20">
                  ✓
                </span>
                <span className="text-white/95">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e2d3e] text-white">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="flex w-full min-w-0 justify-center">
            <video
              src="/uploads/2025/01/KakaoTalk_20250117_112844678.mp4"
              className="h-auto w-full max-w-md rounded-xl bg-black object-contain shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="min-w-0 w-full">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              How can I apply for an Anytap card?
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {[
                "Click ‘Order Now’ button",
                "Upload and verify documents",
                "Wait for approval",
                "Receive your card",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/20">
                    →
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-2 gap-4 px-4 py-12 sm:gap-8 sm:px-6 md:grid-cols-4">
          {[
            { value: "170+", label: "Supported countries" },
            { value: "50+", label: "Fiat currencies supported" },
            { value: "300+", label: "Fiat payments per month" },
            { value: "ALL", label: "Cryptocurrencies supported" },
          ].map((s) => (
            <div key={s.label} className="min-w-0 text-center">
              <div className="text-xl font-semibold sm:text-2xl">{s.value}</div>
              <div className="mt-1 text-[10px] leading-tight text-zinc-500 sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
