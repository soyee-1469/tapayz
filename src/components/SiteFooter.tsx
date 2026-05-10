export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-white py-12 text-sm text-zinc-500 dark:border-white/10 dark:bg-black dark:text-zinc-300">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src="/images/anytap_logo500.png"
            alt="Anytap"
            className="h-6 w-auto"
          />
          <p className="mt-4 max-w-sm leading-6">
            Anytap simplifies cryptocurrency spending with Anytap cards,
            seamlessly converting assets for daily usage while safeguarding your
            privacy and earning cryptoback.
          </p>
          <p className="mt-4 text-sm">
            <a
              href="/contact"
              className="text-zinc-600 underline-offset-4 hover:text-black hover:underline dark:hover:text-white"
            >
              Contact us
            </a>
            <span className="text-zinc-400"> · </span>
            <span className="text-zinc-500">
              News and support channels are shared through official correspondence.
            </span>
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-700">Legal</div>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="/termsofservice"
                className="hover:text-black dark:hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacynotice"
                className="hover:text-black dark:hover:text-white"
              >
                Privacy Notice
              </a>
            </li>
            <li>
              <a
                href="/cookiepolicy"
                className="hover:text-black dark:hover:text-white"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-500">Support</div>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="/contact"
                className="hover:text-black dark:hover:text-white"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            {[
              "/images/footer-trust-badge-01.png",
              "/images/footer-trust-badge-02.png",
              "/images/footer-trust-badge-03.png",
              "/images/footer-trust-badge-04.png",
              "/images/footer-trust-badge-05.png",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-8 w-8 object-contain opacity-90"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <div className="h-px w-full bg-black/10 dark:bg-white/10" />
        <p className="mt-6 text-center text-xs">
          Tapayz Corp {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className="mt-2 text-center text-[10px] text-zinc-400">
          Build{" "}
          {process.env.VERCEL_GIT_COMMIT_SHA
            ? process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7)
            : "local"}
        </p>
      </div>
    </footer>
  );
}

