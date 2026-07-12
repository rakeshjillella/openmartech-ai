export default function ArchitectureLegend() {
  return (

<section className="rounded-[30px] border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">

<h2 className="text-3xl font-black dark:text-white">
Architecture Legend
</h2>

<div className="mt-10 grid gap-6 md:grid-cols-2">

{[
["bg-blue-600","Compute Layer"],
["bg-green-600","Storage Layer"],
["bg-purple-600","AI / ML"],
["bg-orange-500","Visualization"],
].map(([color,label])=>(

<div
key={label}
className="flex items-center gap-4"
>

<div className={`h-5 w-5 rounded-full ${color}`} />

<span className="text-lg dark:text-slate-300">
{label}
</span>

</div>

))}

</div>

</section>

);
}