const Home = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-row w-full items-center justify-center mb-4">
          <img
            className="w-8 h-8 mr-2"
            src="./icons/android-chrome-512x512.png"
            alt="logo"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Plexi
          </span>
          <img src="" />
        </div>
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white w-full text-center">
              Sign in
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
