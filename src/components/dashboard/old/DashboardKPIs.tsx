import EnterpriseCard from "@/components/ui/EnterpriseCard";
import { executiveKPIs } from "@/data/dashboard";

export default function DashboardKPIs() {
  return (

    <section className="py-8">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {executiveKPIs.map((item) => (

          <EnterpriseCard
            key={item.title}
            className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              {item.title}
            </p>

            <h2
              className={`mt-6 text-6xl font-black ${item.color}`}
            >
              {item.value}
            </h2>

            <div className="mt-6 h-2 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />

            <p className="mt-6 text-sm font-semibold text-green-600 dark:text-green-400">
              {item.change}
            </p>

          </EnterpriseCard>

        ))}

      </div>

    </section>

  );
}