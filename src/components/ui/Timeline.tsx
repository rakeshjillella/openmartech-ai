type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

export default function Timeline({ steps }: Props) {
  return (
    <div className="space-y-8">

      {steps.map((step, index) => (

        <div
          key={step.title}
          className="flex gap-6"
        >

          <div className="flex flex-col items-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              {index + 1}
            </div>

            {index !== steps.length - 1 && (
              <div className="mt-2 h-20 w-1 rounded bg-blue-200" />
            )}

          </div>

          <div>

            <h3 className="text-xl font-bold">
              {step.title}
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {step.description}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}