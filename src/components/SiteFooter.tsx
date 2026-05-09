export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-white py-12 text-sm text-zinc-500 dark:border-white/10 dark:bg-black dark:text-zinc-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <img
            src="/uploads/2025/01/Asset-1.png"
            alt="Tapayz"
            className="h-6 w-auto"
          />
          <p className="mt-4 max-w-sm leading-6">
            TAPAYZ simplifies cryptocurrency spending with Tapayz cards,
            seamlessly converting assets for daily usage while safeguarding your
            privacy and earning cryptoback.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="hover:text-black dark:hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              X
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-zinc-500">Legal</div>
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
              "/uploads/2025/01/Group-11-1.png",
              "/uploads/2025/01/Group-12-1.png",
              "/uploads/2025/01/Group-13-1.png",
              "/uploads/2025/01/Group-14-1.png",
              "/uploads/2025/01/Group-15.png",
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

      <div className="mx-auto mt-10 w-full max-w-6xl px-6">
        <div className="h-px w-full bg-black/10 dark:bg-white/10" />
        <p className="mt-6 text-center text-xs">
          Tapayz {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

