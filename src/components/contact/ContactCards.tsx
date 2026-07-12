const contacts = [
  {
    title: "Email",
    value: "rakesh@example.com",
    link: "mailto:rakesh@example.com",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/rakeshjillella",
    link: "https://linkedin.com/in/rakeshjillella",
  },
  {
    title: "GitHub",
    value: "github.com/rakeshjillella",
    link: "https://github.com/rakeshjillella",
  },
  {
    title: "Location",
    value: "Hyderabad, India",
    link: "#",
  },
];

export default function ContactCards() {
  return (
    <section className="py-24">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {contacts.map((item) => (

          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition
              hover:-translate-y-2
              hover:border-blue-500
              hover:shadow-xl
              dark:border-slate-700
              dark:bg-slate-900
            "
          >
            <p className="text-sm uppercase tracking-wide text-slate-500">
              {item.title}
            </p>

            <h2 className="mt-5 text-xl font-bold break-words dark:text-white">
              {item.value}
            </h2>

          </a>

        ))}

      </div>

    </section>
  );
}