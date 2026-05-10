export default function CompanyPage() {
  return (
    <div className="bg-white text-black">
      <section
        className="bg-[#efefef]"
        style={{
          backgroundImage:
            'url("/images/3a3062f9-af74-43e5-b63e-60ce2b1a7164-1-1080x572.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/45">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-16 text-white sm:px-6 md:py-20">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              About Tapayz Corp
            </h1>
            <p className="mt-4 text-lg font-medium text-white/90">
              Borderless crypto charge cards
            </p>
            <p className="mt-8 max-w-4xl whitespace-pre-wrap text-sm leading-7 text-white/90">
            Cryptocurrency technology is advancing rapidly, and while many
            governments are introducing relevant laws and regulations, several
            countries still lack the legal frameworks for cryptocurrency
            exchanges. As a result, the demand for alternative solutions
            continues to grow, giving rise to numerous P2P crypto platforms and
            an increasing number of crypto debit card issuances for easier
            cryptocurrency withdrawals.
            {"\n\n"}
            Tapayz, based in the United States, is strategically positioned to
            meet this demand. Our team consists of seasoned experts in the
            cryptocurrency space, working in collaboration with Alchemypay, a
            leader in crypto technology. The name "Tapayz" reflects our vision
            to tap into the crypto debit card market, and we plan to expand into
            cryptocurrency payment solutions starting in 2026.
            {"\n"}
            In 2025, we will focus on expanding into China and Vietnam, while
            strengthening our presence in the Korean and Japanese markets. With
            a commitment to customer convenience, we offer round-the-clock
            support and multilingual services to ensure a seamless experience
            for our users.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full min-w-0 max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Study abroad",
              body: "A total of 150,000 Korean students are pursuing their studies abroad.",
              icon: "/images/Group-1-1.png",
            },
            {
              title: "Credit access",
              body: "When traditional credit channels are limited, consumers still need reliable ways to pay online and while traveling. Prepaid card products can bridge that gap with clear limits and transparent usage.",
              icon: "/images/Group-2-1.png",
            },
            {
              title: "Online Shopper",
              body: "Overseas shopping transactions amounted to $5.6 billion in 2024.",
              icon: "/images/Group-3-1.png",
            },
            {
              title: "Remittance",
              body: "Cross-border remittances from Korea remain substantial, with households and businesses seeking faster, lower-friction ways to move value internationally.",
              icon: "/images/Group-4-1.png",
            },
            {
              title: "Community",
              body: "Online finance-related communities are highly active.",
              icon: "/images/Group-8.png",
            },
            {
              title: "Distributed teams",
              body: "Organizations with distributed teams and partners often use prepaid cards for allowances, incentives, and controlled spending with predictable limits.",
              icon: "/images/Vector.png",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={c.icon}
                  alt=""
                  className="h-10 w-10 shrink-0 object-contain"
                />
                <div className="text-base font-semibold">{c.title}</div>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-zinc-600">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

