import EnterpriseCard from "@/components/ui/EnterpriseCard";

const services = [
  {
    name: "Apache Airflow",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "Apache Kafka",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "Apache Spark",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "MLflow",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "Iceberg",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "Power BI",
    status: "Healthy",
    color: "bg-green-500",
  },
];

export default function PlatformHealth() {
  return (
    <EnterpriseCard>

      <h2 className="text-3xl font-black dark:text-white">
        Platform Health
      </h2>

      <div className="mt-10 space-y-5">

        {services.map((service) => (

          <div
            key={service.name}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              p-5
              transition
              hover:border-blue-500
              hover:shadow-md
              dark:border-slate-700
            "
          >

            <div>

              <h3 className="font-bold dark:text-white">
                {service.name}
              </h3>

            </div>

            <div className="flex items-center gap-3">

              <span className={`h-3 w-3 rounded-full ${service.color}`} />

              <span className="font-semibold text-green-600 dark:text-green-400">
                {service.status}
              </span>

            </div>

          </div>

        ))}

      </div>

    </EnterpriseCard>
  );
}