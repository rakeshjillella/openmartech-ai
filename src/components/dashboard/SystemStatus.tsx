import EnterpriseCard from "@/components/ui/EnterpriseCard";

const services = [
  {
    name: "Apache Airflow",
    status: "Healthy",
    uptime: "99.98%",
  },
  {
    name: "Apache Kafka",
    status: "Healthy",
    uptime: "99.99%",
  },
  {
    name: "Apache Spark",
    status: "Healthy",
    uptime: "99.97%",
  },
  {
    name: "Apache Iceberg",
    status: "Healthy",
    uptime: "100%",
  },
  {
    name: "MLflow",
    status: "Healthy",
    uptime: "99.96%",
  },
  {
    name: "Power BI",
    status: "Healthy",
    uptime: "99.99%",
  },
];

export default function SystemStatus() {
  return (
    <section className="mt-24">

      <h2 className="mb-10 text-4xl font-black text-slate-900 dark:text-white">
        Platform Services
      </h2>

      <EnterpriseCard>

        <div className="divide-y divide-slate-200 dark:divide-slate-700">

          {services.map((service) => (

            <div
              key={service.name}
              className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between"
            >

              <div>

                <h3 className="font-bold text-slate-900 dark:text-white">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Enterprise Service
                </p>

              </div>

              <div className="flex items-center gap-4">

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  {service.status}
                </span>

                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {service.uptime}
                </span>

              </div>

            </div>

          ))}

        </div>

      </EnterpriseCard>

    </section>
  );
}