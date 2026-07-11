import Link from "next/link";

import {
  Mail,
  FileText,
  FaGithub,
  FaLinkedin,
} from "@/lib/icons";

const contacts = [
  {
    title: "Email",
    value: "rakeshjillella@gmail.com",
    href: "mailto:rakeshjillella@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/rakesh-jillella",
    href: "https://linkedin.com/in/rakesh-jillella",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/rakeshjillella/openmartech-ai",
    href: "https://github.com/rakeshjillella/openmartech-ai",
    icon: FaGithub,
  },
  {
    title: "Resume",
    value: "Download Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function ContactCards() {
  return (
    <section className="mt-20 grid gap-8 md:grid-cols-2">
      {contacts.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            href={item.href}
            target="_blank"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <Icon className="text-blue-600" size={40} />

            <h3 className="mt-6 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 break-all text-slate-600">
              {item.value}
            </p>
          </Link>
        );
      })}
    </section>
  );
}