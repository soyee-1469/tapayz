export default function TapayzCardPage() {
  return (
    <div className="bg-[#f3f3f3] text-black">
      <section className="border-b border-black/5 bg-[#dbdbdb]">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-sm font-medium text-zinc-600">
              Cryptocurrency meets everyday convenience
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#2E86FF] md:text-5xl">
              ANYTAP CARD
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-700">
              Tapayz has partnered with Alchemypay to issue debit cards that
              enable seamless and stable cryptocurrency top-ups through a robust
              technological alliance.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/uploads/2025/07/card_2.png"
              alt="Anytap card"
              className="h-[280px] w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            Fees &amp; Limits
          </h2>
          <div className="mt-8 flex justify-center overflow-x-auto">
            <table className="min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-black/10 text-left text-zinc-500">
                  <th className="py-3 pr-6 font-semibold">Item</th>
                  <th className="py-3 font-semibold">Tapayz</th>
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
                  <tr key={k} className="border-b border-black/10">
                    <td className="py-3 pr-6">{k}</td>
                    <td className="py-3 font-semibold">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0e2d3e] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Top Up the cards with Cryptocurrency
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-sm md:grid-cols-5">
            {[
              "Select your preferred card type",
              "Fill in your name and make your first recharge",
              "Top up at least 10 USD with any token",
              "Complete your deposit",
              "Your card is activated",
            ].map((t, idx) => (
              <div
                key={t}
                className="rounded-xl bg-white/10 p-4 text-center"
              >
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                  {idx + 1}
                </div>
                <div className="text-white/90">{t}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src="/uploads/2025/01/카드이용순서-2048x782.png"
              alt="Tapayz steps illustration"
              className="h-auto w-full max-w-4xl rounded-xl object-contain shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

