import Container from "@/components/ui/Container";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const technologies = [
  "Apache Spark",
  "Kafka",
  "Airflow",
  "Flink",
  "Iceberg",
  "MLflow",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">

      <Container>

        <div className="grid gap-14 py-16 md:grid-cols-4">

          {/* Company */}

          <div>

            <h3 className="text-2xl font-black text-white">
              {siteConfig.name}
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              Enterprise Marketing Decision Intelligence Platform powered by
              modern Data Engineering, Responsible AI, Generative AI and
              Executive Analytics.
            </p>

            <div className="mt-6 flex gap-4">

              <Link
                href={siteConfig.github}
                target="_blank"
                className="text-sm transition hover:text-blue-400"
              >
                GitHub
              </Link>

              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="text-sm transition hover:text-blue-400"
              >
                LinkedIn
              </Link>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Platform
            </h4>

            <ul className="space-y-3">

              {siteConfig.navigation.map((item) => (

                <li key={item.title}>

                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Technologies */}

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Technologies
            </h4>

            <ul className="space-y-3">

              {technologies.map((tech) => (

                <li key={tech}>
                  {tech}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 font-semibold text-white">
              About
            </h4>

            <p className="leading-7 text-slate-400">

              Built as an enterprise portfolio demonstrating
              Data Engineering,
              AI Platform Engineering,
              Responsible AI,
              Generative AI,
              and Executive Decision Intelligence.

            </p>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 text-sm text-slate-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} OpenMarTech AI

          </p>

          <p>

            Built with ❤️ by <span className="font-semibold text-white">Rakesh Jillella</span>

          </p>

        </div>

      </Container>

    </footer>
  );
}