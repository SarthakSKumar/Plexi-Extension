import ListButton from "../Buttons/ListButton";

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
        </div>
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <ListButton
            title="Bookmark Manager"
            tagline="Your Web Favorites, Effortlessly Organized"
            icon="bookmark"
          />

          <ListButton
            title="Quick Search AI"
            tagline="Search Made Smarter with AI"
            icon="ai-search"
          />

          <ListButton
            title="Language Translator"
            tagline="Translate and Connect Worldwide"
            icon="translate"
          />

          <ListButton
            title="Password Generator and Manager"
            tagline="Safeguarding Your Digital Life, Simply"
            icon="lock"
          />

          <ListButton
            title="Quick Notes"
            tagline="Capture Thoughts in a Flash"
            icon="note"
          />

          <ListButton
            title="Quick Screenshot"
            tagline="Capture Screens in an Instant"
            icon="screenshot"
          />

          <ListButton
            title="Dark-Mode/Light-Mode Switching"
            tagline="Adapt UI to Your Comfort"
            icon="dark-light"
          />

          <ListButton
            title="Webpage Annotation"
            tagline="Enhance Web Content with Annotations"
            icon="annotate"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
