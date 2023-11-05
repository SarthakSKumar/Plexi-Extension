export default function ListButton({ title, tagline, slug, setCurrentScreen }) {
  return (
    <button
      className="my-1.5 px-3 space-y-4 w-full"
      onClick={() => {
        setCurrentScreen(slug);
      }}
    >
      <div className="flex items-center gap-3 rounded-md border border-gray-300 focus:outline-none hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 font-medium text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 bg-white px-4 py-2 shadow  hover:border-primary-300">
        <img
          className="h-6 w-6 rounded-md"
          src={`./icons/app/${slug}.gif`}
          alt=""
        />
        <div className="flex flex-row justify-start flex-wrap w-full ">
          <div className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5 w-full text-left">
            {title}
          </div>
          <div className="text-xs text-gray-900 dark:text-gray-100">
            {tagline}
          </div>
        </div>
      </div>
    </button>
  );
}
