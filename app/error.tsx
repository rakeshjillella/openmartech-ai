"use client";

import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">

        <div className="mb-6 text-7xl">
          ⚠️
        </div>

        <h1 className="mb-4 text-4xl font-black text-slate-900 dark:text-white">
          Something went wrong
        </h1>

        <p className="mb-10 text-lg leading-8 text-slate-600 dark:text-slate-400">
          An unexpected error occurred while loading this page.
        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={reset}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/"
            className="
              rounded-xl
              border
              border-slate-300
              px-6
              py-4
              font-semibold
              transition
              hover:border-blue-600
              hover:text-blue-600
              dark:border-slate-700
            "
          >
            Home
          </Link>

        </div>

      </div>
    </section>
  );
}