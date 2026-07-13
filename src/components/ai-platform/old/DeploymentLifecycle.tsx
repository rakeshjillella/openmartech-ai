const lifecycle = [
  "Develop",
  "Train",
  "Validate",
  "Register",
  "Deploy",
  "Monitor",
  "Retrain",
];

export default function DeploymentLifecycle() {
  return (
    <section className="py-24">

      <div className="mb-16 text-center">

        <span className="font-semibold uppercase tracking-widest text-green-600">
          MLOps
        </span>

        <h2 className="mt-5 text-5xl font-black dark:text-white">
          Deployment Lifecycle
        </h2>

      </div>

      <div className="flex flex-wrap justify-center gap-6">

        {lifecycle.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-5"
          >
            <div
              className="
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-8
                py-5
                font-semibold
                text-white
                shadow-lg
              "
            >
              {step}
            </div>

            {index !== lifecycle.length - 1 && (
              <span className="text-3xl text-blue-500">→</span>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}