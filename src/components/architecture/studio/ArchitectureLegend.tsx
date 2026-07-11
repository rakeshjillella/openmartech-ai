export default function ArchitectureLegend() {
  return (

    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        Architecture Legend
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="flex items-center gap-4">

          <span className="h-4 w-4 rounded-full bg-blue-600"/>

          <span>Compute Layer</span>

        </div>

        <div className="flex items-center gap-4">

          <span className="h-4 w-4 rounded-full bg-green-600"/>

          <span>Storage Layer</span>

        </div>

        <div className="flex items-center gap-4">

          <span className="h-4 w-4 rounded-full bg-purple-600"/>

          <span>Machine Learning</span>

        </div>

        <div className="flex items-center gap-4">

          <span className="h-4 w-4 rounded-full bg-orange-500"/>

          <span>Visualization</span>

        </div>

      </div>

    </section>

  );
}