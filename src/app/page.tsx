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
                src="/images/hero-app-mockup.png"
                alt="Anytap app"
                className="absolute left-0 top-1/2 max-h-[92%] w-[58%] max-w-[58%] -translate-y-1/2 object-contain object-left"
              />
              <img
                src="/images/hero-anytap-card.png"
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
              src="/images/partners-logos-row-1.png"
              alt="Partner logo strip"
              className="h-auto max-h-8 w-full object-contain sm:h-7 sm:w-auto sm:max-w-full"
            />
            <img
              src="/images/partners-logos-row-2.png"
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
              src="/images/home-video-pay-anywhere.mp4"
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
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-white/90 sm:text-[15px]">
            Indulge in global disbursements, both in the digital and physical
            realms, at an expansive network surpassing one million purveyors.
            Leverage Anytap cards to unlock the latent potential of your
            cryptographic holdings, affording unparalleled adaptability and
            effortless access to liquid funds whenever and wherever your needs
            require.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-8">
            {(
              [
                { n: 1, label: "Streamlined Membership Process" },
                { n: 2, label: "Fast Card Delivery (2–3 days)" },
                { n: 3, label: "Competitive fees" },
                { n: 4, label: "No hidden fees" },
                { n: 5, label: "Anonymous Card" },
                { n: 6, label: "High balance limits" },
                { n: 7, label: "Multilingual service" },
                { n: 8, label: "24/7 support" },
              ] as const
            ).map(({ n, label }) => (
              <div
                key={n}
                className="flex min-w-0 flex-row items-center gap-3 text-left"
              >
                <img
                  src={`/images/why_img${n}.png`}
                  alt=""
                  className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
                />
                <p className="min-w-0 flex-1 text-xs font-medium leading-snug text-white/95 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e2d3e] text-white">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="flex w-full min-w-0 justify-center">
            <video
              src="/images/home-video-card-apply.mp4"
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
