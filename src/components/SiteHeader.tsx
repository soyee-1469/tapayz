import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/tapayz-card", label: "Anytap Card" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/75 backdrop-blur dark:bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/uploads/2025/01/Asset-1.png"
            alt="Anytap"
            width={82}
            height={22}
            priority
          />
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-700 dark:text-zinc-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-black/5 dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-2 hidden rounded-md px-3 py-1.5 text-xs font-semibold text-black hover:bg-black/5 sm:inline-flex"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="ml-2 hidden rounded-md bg-[#2E86FF] px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-[#2E86FF]/90 sm:inline-flex"
          >
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}

