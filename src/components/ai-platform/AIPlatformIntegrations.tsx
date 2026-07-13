import Image from "next/image";

import { technologyData } from "@/data/technologyData";

export default function AIPlatformIntegrations() {

  return (

    <section className="space-y-16">

      {/* Header */}

      <div className="mx-auto max-w-4xl text-center">

        <span
          className="
            rounded-full
            bg-indigo-100
            px-5
            py-2
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-indigo-700

            dark:bg-indigo-900/30
            dark:text-indigo-300
          "
        >
          Enterprise Ecosystem
        </span>

        <h2
          className="
            mt-6
            text-5xl
            font-black
            text-slate-900
            dark:text-white
          "
        >
          Integrated Technology Platform
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            dark:text-slate-400
          "
        >
          OpenMarTech AI integrates modern enterprise technologies across
          Data Engineering, Streaming, Lakehouse, AI Engineering,
          Responsible AI and Executive Analytics.
        </p>

      </div>

      {/* Logos */}

      <div
        className="
          grid
          gap-8

          grid-cols-2

          sm:grid-cols-3

          lg:grid-cols-4

          xl:grid-cols-6
        "
      >

        {technologyData.map((tech) => (

          <div
            key={tech.id}
            className="
              group

              rounded-[28px]

              border
              border-slate-200

              bg-white

              p-8

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-2xl

              dark:border-slate-800
              dark:bg-slate-900
            "
          >

            <div
              className="
                flex
                h-20
                items-center
                justify-center
              "
            >

              <Image
                src={tech.logo}
                alt={tech.name}
                width={60}
                height={60}
                className="
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

            </div>

            <h3
              className="
                mt-6
                text-center
                text-lg
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              {tech.name}
            </h3>

          </div>

        ))}

      </div>

    </section>

  );

}