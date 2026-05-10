export default function TapayzCardPage() {
  return (
    <div className="bg-[#f3f3f3] text-black">
      <section className="border-b border-black/5 bg-[#dbdbdb]">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div className="min-w-0">
            <p className="text-sm font-medium text-zinc-600">
              Cryptocurrency meets everyday convenience
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#ea580c] md:text-5xl">
              ANYTAP CARD
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-700">
              Tapayz Corp has partnered with Alchemypay to issue debit cards
              that enable seamless and stable cryptocurrency top-ups through a
              robust technology partnership.
            </p>
          </div>
          <div className="flex w-full min-w-0 justify-center">
            <img
              src="/images/500w/anypay_img3.png"
              alt="Anytap card"
              className="mx-auto h-auto w-full max-w-[19.6rem] object-contain md:max-w-[22.4rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-6 py-16 sm:px-8">
          <div className="mx-auto w-full min-w-0 sm:max-w-[500px]">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900">
            Fees &amp; Limits
          </h2>
          {/* Mobile: card list (prevents horizontal page scroll) */}
          <div className="mt-8 grid gap-3 sm:hidden">
            {[
              ["Top up fee", "2 %"],
              ["Max balance at any time", "100,000 EURO"],
              ["Max monthly transaction limit", "100,000 EURO"],
              ["Max daily payment limit", "10,000 EURO"],
              ["Daily Withdrawal Limit", "2,000 EURO"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-xl border border-black/10 bg-white p-4"
              >
                <div className="text-xs font-medium text-zinc-500">{k}</div>
                <div className="mt-1 text-sm font-semibold tabular-nums text-zinc-900">
                  {v}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/tablet: table */}
          <div className="mt-8 hidden w-full sm:block">
            <table className="w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="border-b border-black/10 text-left text-zinc-500">
                  <th className="py-3 pr-6 font-semibold">
                    Item
                  </th>
                  <th className="py-3 font-semibold">
                    Anytap
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Top up fee", "2 %"],
                  ["Max balance at any time", "100,000 EURO"],
                  ["Max monthly transaction limit", "100,000 EURO"],
                  ["Max daily payment limit", "10,000 EURO"],
                  ["Daily Withdrawal Limit", "2,000 EURO"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-b border-black/10 align-top">
                    <td className="py-3 pr-6">
                      {k}
                    </td>
                    <td className="py-3 font-semibold tabular-nums whitespace-nowrap">
                      {v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0e2d3e] text-white">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Top up your card with cryptocurrency
          </h2>

          <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 gap-4 text-sm md:grid-cols-3 md:gap-5 lg:grid-cols-5 lg:gap-4">
            {[
              "Select your preferred card type",
              "Fill in your name and make your first recharge",
              "Top up at least 10 USD with any token",
              "Complete your deposit",
              "Your card is activated",
            ].map((t, idx) => (
              <div
                key={t}
                className="flex min-w-0 flex-col items-stretch rounded-xl bg-white/10 p-4 text-left sm:p-5"
              >
                <img
                  src={`/images/anytapcard_img${idx + 1}.png`}
                  alt=""
                  className="mb-3 h-[11.2rem] w-full self-center object-contain sm:h-56 md:h-[16.8rem] lg:h-[9.8rem]"
                />
                <div className="flex w-full items-center justify-start gap-2.5 text-xs leading-snug text-white/90 sm:gap-3 sm:text-sm">
                  <span
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ea580c] text-xs font-semibold leading-none text-white"
                    aria-hidden
                  >
                    {idx + 1}
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

