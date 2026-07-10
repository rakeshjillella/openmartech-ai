import Container from "@/components/ui/Container";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">

          <div>
            <h3 className="text-2xl font-bold text-white">
              {siteConfig.name}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Enterprise Marketing Decision Intelligence Platform built using
              modern Data Engineering, AI Platform Engineering, Responsible AI,
              Generative AI, and Executive Decision Intelligence.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-semibold text-white">
              Navigation
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

          <div>
            <h4 className="mb-5 font-semibold text-white">
              Connect
            </h4>

            <div className="space-y-3">

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-400"
              >
                GitHub Repository
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-400"
              >
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} OpenMarTech AI • Built by Rakesh Jillella
        </div>
      </Container>
    </footer>
  );
}