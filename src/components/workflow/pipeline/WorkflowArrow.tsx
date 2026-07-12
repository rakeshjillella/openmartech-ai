export default function WorkflowArrow() {
  return (
    <div className="flex items-center">

      <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />

      <div className="mx-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
        →
      </div>

      <div className="h-[3px] w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />

    </div>
  );
}