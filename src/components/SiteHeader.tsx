"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/tapayz-card", label: "Anytap Card" },
  { href: "/contact", label: "Contact" },
] as const;

const DESKTOP_MIN_PX = 1200;

function readIsDesktop() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= DESKTOP_MIN_PX;
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => readIsDesktop());
  const pathname = usePathname();

  useLayoutEffect(() => {
    const apply = () => setIsDesktop(readIsDesktop());
    apply();

    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN_PX}px)`);
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isDesktop]);

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 overflow-x-hidden bg-white/75 backdrop-blur dark:bg-black/40">
      <div className="relative z-[60] mx-auto flex w-full min-w-0 max-w-6xl items-center justify-between gap-3 bg-white/75 px-4 py-4 backdrop-blur sm:px-6 dark:bg-black/40">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <Image
            src="/uploads/2025/01/Asset-1.png"
            alt="Anytap"
            width={82}
            height={22}
            priority
          />
        </Link>

        {/* Desktop: centered horizontal links (>=1200px via CSS) */}
        <nav
          className="anytap-desktop-nav min-w-0 flex-1 items-center justify-center gap-3 text-sm text-zinc-700 sm:gap-4 dark:text-zinc-200"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1 transition hover:bg-black/5 dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-1 shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold text-black hover:bg-black/5 sm:ml-2 dark:text-zinc-100 dark:hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="ml-1 shrink-0 rounded-md bg-[#2E86FF] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#2E86FF]/90 sm:ml-2"
          >
            Sign up
          </Link>
        </nav>

        {/* Mobile: hamburger only (<1200px via CSS) */}
        <button
          type="button"
          className="anytap-mobile-toggle shrink-0 rounded-md p-2 text-zinc-800 hover:bg-black/5 dark:text-zinc-100 dark:hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && !isDesktop ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/20"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="relative z-50 border-t border-black/10 bg-white shadow-lg dark:border-white/10 dark:bg-zinc-950"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
              aria-label="Mobile"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-800 hover:bg-black/5 dark:text-zinc-100 dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="mt-2 rounded-lg px-3 py-3 text-sm font-semibold text-zinc-800 hover:bg-black/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-[#2E86FF] px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#2E86FF]/90"
              >
                Sign up
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
