import Link from "next/link";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-xl shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            {siteConfig.name}
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* GitHub */}
          <Link
            href={siteConfig.github}
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            GitHub
          </Link>
        </div>
        {/* Mobile / small screen actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={siteConfig.github}
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            GitHub
          </Link>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
