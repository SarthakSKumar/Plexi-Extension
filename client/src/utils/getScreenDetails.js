export default function getScreenDetails(currentScreen) {
  switch (currentScreen) {
    case "home":
      return {
        screenName: "Plexi",
        screenIcon: "./icons/android-chrome-512x512.png",
        tagline: "",
      };
    case "bookmarks":
      return {
        screenName: "Bookmark Manager",
        screenIcon: "./icons/app/bookmark",
        tagline: "Web Organization with Bookmarks",
      };
    case "ai-search":
      return {
        screenName: "Quick AI Search",
        screenIcon: "./icons/app/ai-search",
        tagline: "Search Made Smarter with AI",
      };
    case "translate":
      return {
        screenName: "Language Translator",
        screenIcon: "./icons/app/translate",
        tagline: "Instant Translation, One Click!",
      };
    case "passwords":
      return {
        screenName: "Plexi",
        screenIcon: "./icons/app/lock",
        tagline: "Security Simplified, Your Guardian",
      };
    case "notes":
      return {
        screenName: "Plexi",
        screenIcon: "./icons/app/note",
        tagline: "Efficient Ideas, Quick Notes!",
      };
    case "screenshot":
      return {
        screenName: "Plexi",
        screenIcon: "./icons/app/screenshot",
        tagline: "Capture Screens in an Instant",
      };
    case "dark-light":
      return {
        screenName: "Plexi",
        screenIcon: "./icons/app/dark-light",
        tagline: "Light or Dark, Your Choice!",
      };
    case "annotate":
      return {
        screenName: "Plexi",
        screenIcon: "./icons/app/annotate",
        tagline: "Enhance Web Content with Annotations",
      };
    default:
      return {
        screenName: "Plexi",
        screenIcon: "./icons/android-chrome-512x512.png",
        tagline: "",
      };
  }
}
