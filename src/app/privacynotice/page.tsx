export default function PrivacyNoticePage() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">
          Privacy Notice
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: May 9, 2026 · Tapayz Corp
        </p>
        <div className="mt-10 space-y-6 text-sm leading-7 text-zinc-700">
          <p>
            Tapayz Corp (“we,” “us,” or “our”) respects your privacy. This
            Privacy Notice describes how we collect, use, and share information
            when you use our websites, applications, and related services
            related to the Anytap card program.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            1. Information we collect
          </h2>
          <p>
            We may collect identifiers and contact details you provide (such
            as name, email, and phone), application and verification information
            required to offer financial products, device and usage data, and
            information from partners necessary to operate the Services.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            2. How we use information
          </h2>
          <p>
            We use information to provide and improve the Services, verify
            identity, comply with legal obligations, prevent fraud, communicate
            with you, and analyze usage in aggregated form.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            3. Sharing
          </h2>
          <p>
            We may share information with service providers, card and payment
            partners, and authorities when required by law or to protect rights
            and safety. We do not sell your personal information.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            4. Retention and security
          </h2>
          <p>
            We retain information as long as needed for the purposes above and
            apply reasonable safeguards. Retention periods may depend on legal
            and regulatory requirements.
          </p>
          <h2 className="pt-4 text-lg font-semibold text-black">
            5. Your choices and contact
          </h2>
          <p>
            Depending on your region, you may have rights to access, correct,
            or delete certain data. To exercise rights or ask questions, contact
            us via the{" "}
            <a href="/contact" className="font-medium text-[#2E86FF] hover:underline">
              Contact
            </a>{" "}
            page.
          </p>
          <p className="text-xs text-zinc-500">
            This notice is a high-level summary. Region-specific disclosures
            (for example, under GDPR or local law) may be provided separately
            where required.
          </p>
        </div>
      </section>
    </div>
  );
}
