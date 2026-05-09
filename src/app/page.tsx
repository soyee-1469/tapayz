export default function Home() {
  return (
    <div className="bg-[#f3f3f3] text-black">
      <section className="border-b border-black/5">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
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
            <div className="mt-8 flex justify-center md:justify-start">
             
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-[260px] w-[340px] md:h-[320px] md:w-[420px]">
              <img
                src="/uploads/2025/01/image-6.png"
                alt="Tapayz app"
                className="absolute left-0 top-0 h-full w-auto object-contain"
              />
              <img
                src="/uploads/2025/01/card_main_1.png"
                alt="Anytap card"
                className="absolute right-0 top-14 h-[50%] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            <img
              src="/uploads/2025/01/Group-7.png"
              alt="Partner logo strip"
              className="h-7 w-auto"
            />
            <img
              src="/uploads/2025/01/Group-16.png"
              alt="Partner logo strip 2"
              className="h-40 w-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#3a3a3a] text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="flex justify-center">
            <video
              src="/uploads/2025/01/KakaoTalk_20250117_083000936_1.mp4"
              className="h-auto w-full max-w-[320px] rounded-xl bg-black shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Pay anytime <br />
              anywhere with your <br />
              Crypto or Flat.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
              Anytap 카드로 간편하게 결제하고, 
              필요한 곳에서 언제든 사용할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2E86FF] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Why should you elect an Anytap card?
          </h2>
        

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-sm md:grid-cols-2">
            {[
              "Fast and easy Membership Process",
              "Your Card Delivery (3-5 days)",
              "Connecting fees",
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
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-2 md:py-20">
          <div className="flex justify-center">
            <video
              src="/uploads/2025/01/KakaoTalk_20250117_112844678.mp4"
              className="h-auto w-full max-w-[320px] rounded-xl bg-black shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div>
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
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { value: "170+", label: "Supported countries" },
            { value: "50+", label: "Fiat currencies supported" },
            { value: "300+", label: "Fiat payments per month" },
            { value: "ALL", label: "Cryptocurrencies supported" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
