import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">

      <Container>

        <div className="grid gap-12 py-16 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-black">
              OpenMarTech
              <span className="text-blue-600"> AI</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Enterprise AI Platform demonstrating modern Data Engineering,
              Responsible AI, MLOps and Business Intelligence.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="font-bold text-slate-900">
              Platform
            </h3>

            <ul className="mt-5 space-y-3">

              {siteConfig.navigation.map((item) => (

                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {item.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-bold text-slate-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  className="text-slate-600 hover:text-blue-600"
                >
                  GitHub
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
              </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-600 hover:text-blue-600"
                >
                  Executive Dashboard
                </Link>
              </li>

            </ul>

          </div>

          {/* Tech Stack */}

          <div>

            <h3 className="font-bold text-slate-900">
              Enterprise Stack
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Airflow",
                "Kafka",
                "Spark",
                "Iceberg",
                "MLflow",
                "Trino",
                "Power BI",
              ].map((tech) => (

                <span
                  key={tech}
                  className="rounded-full bg-white px-3 py-1 text-sm shadow-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>

        <div className="border-t py-6 text-center text-sm text-slate-500">

          © {year} OpenMarTech AI • Built with ❤️ by Rakesh Jillella
        </div>

      </Container>

    </footer>
  );
}