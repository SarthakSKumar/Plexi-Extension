export default function ListButton({ title, tagline, icon }) {
  return (
    <div className="my-3 px-4 space-y-4 md:space-y-6">
      <div className="flex items-center space-x-4 rounded-md border bg-white px-4 py-2 shadow dark:border-gray-700 dark:bg-gray-800">
        <img
          className="h-6 w-6 rounded-md"
          src={`./icons/app/${icon}.gif`}
          alt=""
        />
        <div className="">
          <div className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
            {title}
          </div>
          <div className="text-xs text-gray-900 dark:text-gray-100">
            {tagline}
          </div>
        </div>
      </div>
    </div>
  );
}
