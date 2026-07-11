"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import MegaMenu, {
  PlatformMenu,
  ArchitectureMenu,
  ResourceMenu,
} from "./MegaMenu";

const navigation = [
  {
    title: "Platform",
    mega: PlatformMenu,
  },
  {
    title: "Architecture",
    mega: ArchitectureMenu,
  },
  {
    title: "Resources",
    mega: ResourceMenu,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {navigation.map((item) => {
        // ---------- Mega Menu ----------
        if ("mega" in item) {
          return (
            <div
              key={item.title}
              className="group relative"
            >
              <button
                className="
                  flex
                  items-center
                  gap-1
                  rounded-xl
                  px-4
                  py-3
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  hover:text-blue-600
                "
              >
                {item.title}

                <ChevronDown
                  size={16}
                  className="
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
              </button>

              <MegaMenu items={item.mega ?? []} />
            </div>
          );
        }

        // ---------- Standard Link ----------
        return (
          <Link
            key={item.title}
            href={item.href!}
            className="
              rounded-xl
              px-4
              py-3
              font-medium
              text-slate-700
              transition
              hover:bg-slate-100
              hover:text-blue-600
            "
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}