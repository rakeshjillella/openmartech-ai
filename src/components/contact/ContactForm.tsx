"use client";

import { useState } from "react";

import {
  Mail,
  BrainCircuit,
} from "@/lib/icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Get In Touch
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
              Let's Discuss Your Next Enterprise AI Project
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Whether you're planning an Enterprise AI platform,
              Data Engineering solution,
              Responsible AI implementation,
              or executive analytics dashboard,
              I'd love to hear about your ideas.
            </p>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Mail size={22} />
                </div>

                <div>

                  <p className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>

                  <p className="text-slate-600 dark:text-slate-400">
                    rakeshjillella@gmail.com
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-10
              shadow-xl

              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            {!submitted ? (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-5
                      py-3

                      outline-none

                      transition

                      focus:border-blue-500

                      dark:border-slate-700
                      dark:bg-slate-950
                    "
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-5
                      py-3

                      outline-none

                      transition

                      focus:border-blue-500

                      dark:border-slate-700
                      dark:bg-slate-950
                    "
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-5
                      py-3

                      outline-none

                      transition

                      focus:border-blue-500

                      dark:border-slate-700
                      dark:bg-slate-950
                    "
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-5
                      py-4

                      outline-none

                      transition

                      focus:border-blue-500

                      dark:border-slate-700
                      dark:bg-slate-950
                    "
                  />

                </div>

                <button
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3

                    rounded-xl

                    bg-blue-600

                    py-4

                    font-semibold
                    text-white

                    transition-all

                    hover:-translate-y-1
                    hover:bg-blue-700
                  "
                >
                  <BrainCircuit size={20} />

                  Send Message

                </button>

              </form>

            ) : (

              <div className="py-20 text-center">

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Thank You!
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Your message has been received.
                  I'll respond as soon as possible.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}