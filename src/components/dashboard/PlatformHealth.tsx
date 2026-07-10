import EnterpriseCard from "@/components/ui/EnterpriseCard";
import { platformHealth } from "@/data/dashboard";

export default function PlatformHealth() {
  return (
    <section className="mt-24">

      <div className="mb-10">

        <h2 className="text-3xl font-bold">
          Enterprise Platform Health
        </h2>

        <p className="mt-3 text-slate-600">
          Real-time monitoring across the OpenMarTech AI platform.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {platformHealth.map((service) => (

          <EnterpriseCard key={service.service}>

            <div className="flex items-center justify-between">

              <h3 className="font-bold">
                {service.service}
              </h3>

              <div
                className={`h-3 w-3 rounded-full ${service.color}`}
              />

            </div>

            <p className="mt-6 text-4xl font-black text-emerald-600">
              {service.status}
            </p>

            <p className="mt-3 text-slate-500">
              Uptime: {service.uptime}
            </p>

          </EnterpriseCard>

        ))}

      </div>

    </section>
  );
}