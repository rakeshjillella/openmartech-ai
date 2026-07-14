"use client";

import Link from "next/link";
import { BrainCircuit, ArrowRight, Search } from "@/lib/icons";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-[calc(100vh-80px)]
        items-center
        justify-center
        px-6
      "
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Logo */}

        <div
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center

            rounded-3xl

            bg-gradient-to-br
            from-blue-600
            to-indigo-600

            text-white
            shadow-2xl
          "
        >
          <BrainCircuit size={42} />
        </div>

        {/* 404 */}

        <h1
          className="
            mt-10

            text-7xl
            font-black
            tracking-tight

            text-slate-900

            dark:text-white
          "
        >
          404
        </h1>

        <h2
          className="
            mt-6

            text-3xl
            font-black

            text-slate-900

            dark:text-white
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl

            text-lg
            leading-8

            text-slate-600

            dark:text-slate-400
          "
        >
          The page you're looking for doesn't exist or may have
          been moved.

          Continue exploring the OpenMarTech AI Enterprise
          Platform.
        </p>

        {/* Actions */}

        <div
          className="
            mt-12

            flex
            flex-col
            items-center
            justify-center
            gap-5

            sm:flex-row
          "
        >
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              bg-blue-600

              px-7
              py-4

              font-semibold

              text-white

              shadow-lg

              transition-all

              hover:-translate-y-1
              hover:bg-blue-500
              hover:shadow-xl
            "
          >
            <ArrowRight
  size={18}
  className="rotate-180"
/>

            Back Home
          </Link>

          <Link
            href="/architecture"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border
              border-slate-300

              bg-white

              px-7
              py-4

              font-semibold

              text-slate-700

              transition-all

              hover:-translate-y-1
              hover:border-blue-500
              hover:text-blue-600
              hover:shadow-lg

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-200
            "
          >
            <Search size={18} />

            Explore Architecture
          </Link>
        </div>

        {/* Bottom */}

        <div
          className="
            mt-16

            rounded-3xl

            border
            border-slate-200

            bg-white

            p-8

            shadow-sm

            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <p
            className="
              font-semibold

              text-slate-900

              dark:text-white
            "
          >
            OpenMarTech AI
          </p>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Enterprise Data Engineering • AI Platform Engineering
            • Responsible AI • Decision Intelligence
          </p>
        </div>
      </div>
    </main>
  );
}