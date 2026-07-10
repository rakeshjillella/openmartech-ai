"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-slate-900"
          >
            OpenMarTech
            <span className="text-blue-600"> AI</span>
          </Link>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`relative text-sm font-semibold transition duration-300

                  ${
                    active
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }
                  `}
                >
                  {item.title}

                  {active && (
                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[3px]
                        w-full
                        rounded-full
                        bg-blue-600
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* GitHub Button */}

          <Link
            href={siteConfig.github}
            target="_blank"
            className="
              hidden
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-blue-700
              hover:shadow-xl
              md:inline-flex
            "
          >
            GitHub
          </Link>
        </div>
      </Container>
    </header>
  );
}