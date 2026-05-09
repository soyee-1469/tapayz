export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: May 9, 2026 · Tapayz Corp
        </p>
        <div className="mt-10 space-y-6 text-sm leading-7 text-zinc-700">
          <p>
            These Terms of Service (“Terms”) govern your access to and use of
            the websites, applications, and related services (collectively, the
            “Services”) operated by Tapayz Corp (“we,” “us,” or “our”) in
            connection with the Anytap card program and related offerings.
          </p>
          <p>
            By accessing or using the Services, you agree to be bound by these
            Terms. If you do not agree, do not use the Services.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            1. Eligibility and accounts
          </h2>
          <p>
            You must provide accurate information when you register or apply
            for products we offer. You are responsible for safeguarding your
            account credentials and for all activity under your account.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            2. Services and changes
          </h2>
          <p>
            We may modify, suspend, or discontinue any part of the Services at
            any time. Card issuance, limits, fees, and availability are subject
            to partner networks, applicable law, and our policies.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            3. Acceptable use
          </h2>
          <p>
            You agree not to misuse the Services, including by attempting to
            circumvent security, interfere with other users, or use the
            Services for unlawful purposes.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            4. Disclaimers and limitation of liability
          </h2>
          <p>
            The Services are provided “as is” to the fullest extent permitted by
            law. To the extent permitted by law, we disclaim warranties and
            limit our liability for indirect or consequential damages.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            5. Contact
          </h2>
          <p>
            For questions about these Terms, please use the{" "}
            <a href="/contact" className="font-medium text-[#2E86FF] hover:underline">
              Contact
            </a>{" "}
            page.
          </p>
          <p className="text-xs text-zinc-500">
            This page is a general summary. Cardholder agreements, issuer
            terms, and regional addenda may apply to specific products and
            supersede conflicting language where required by law.
          </p>
        </div>
      </section>
    </div>
  );
}
