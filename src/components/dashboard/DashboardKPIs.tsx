import EnterpriseCard from "@/components/ui/EnterpriseCard";
import { executiveKPIs } from "@/data/dashboard";

export default function DashboardKPIs() {
  return (
    <section className="mt-20">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {executiveKPIs.map((item) => (

          <EnterpriseCard key={item.title}>

            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {item.title}
            </p>

            <h2 className={`mt-5 text-5xl font-black ${item.color}`}>
              {item.value}
            </h2>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              {item.change}
            </p>

          </EnterpriseCard>

        ))}

      </div>

    </section>
  );
}