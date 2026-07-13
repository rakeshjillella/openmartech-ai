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
    <nav
  className="
    hidden
    h-full

    items-center
    justify-center

    gap-2

    whitespace-nowrap

    lg:flex
  "
>
      {navigation.map((item) => {
        /* ---------------------------------------------------- */
        /* Mega Menu                                             */
        /* ---------------------------------------------------- */

        if ("mega" in item) {
          return (
            <div
  key={item.title}
  className="
    group
    relative
    flex
    h-full
    items-center
  "
>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded="false"

                className="
                  flex
                  h-11
                  shrink-0
                  items-center
                  gap-2

                  rounded-xl

                  px-4

                  text-sm
                  font-semibold

                  text-slate-700

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-blue-50
                  hover:text-blue-600

                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-blue-400
"
              >
                <span>{item.title}</span>

                <ChevronDown
                  size={16}
                  className="
                    transition-transform
                    duration-300

                    group-hover:rotate-180
                  "
                />
              </button>

              <MegaMenu items={item.mega!} />
            </div>
          );
        }

        /* ---------------------------------------------------- */
        /* Standard Link                                         */
        /* ---------------------------------------------------- */

        return (
          <Link
            key={item.title}
            href={item.href}
            className="
              flex
              h-11
              shrink-0
              items-center

              rounded-xl
              
              px-4

              text-sm
              font-semibold

              text-slate-700

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-blue-50
              hover:text-blue-600

              dark:text-slate-300
              dark:hover:bg-slate-800
              dark:hover:text-blue-400
            "
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}