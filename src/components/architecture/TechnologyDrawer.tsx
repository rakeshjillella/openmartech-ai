type Props = {

  title: string;

};

export default function TechnologyDrawer({

  title,

}: Props) {

  return (

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

      <h3 className="text-3xl font-bold">

        {title}

      </h3>

      <p className="mt-6 text-slate-600">

        Information will appear here.

      </p>

    </div>

  );

}