export default function getScreenDetails(currentScreen) {
  switch (currentScreen) {
    case "home":
      return {
        screenName: "Plexi",
        screenSlug: "home",
        screenIcon: "./icons/android-chrome-512x512.png",
        tagline: "",
      };
    case "bookmarks":
      return {
        screenName: "Bookmark Manager",
        screenSlug: "bookmarks",
        screenIcon: "./icons/app/bookmarks.gif",
        tagline: "Web Organization with Bookmarks",
      };
    case "aisearch":
      return {
        screenName: "Quick AI Search",
        screenSlug: "aisearch",
        screenIcon: "./icons/app/aisearch.gif",
        tagline: "Search Made Smarter with AI",
      };
    case "translate":
      return {
        screenName: "Language Translator",
        screenSlug: "translate",
        screenIcon: "./icons/app/translate.gif",
        tagline: "Instant Translation, One Click!",
      };
    case "passwords":
      return {
        screenName: "Password Manager",
        screenSlug: "passwords",
        screenIcon: "./icons/app/passwords.gif",
        tagline: "Security Simplified, Your Guardian",
      };
    case "notes":
      return {
        screenName: "Quick Note",
        screenSlug: "notes",
        screenIcon: "./icons/app/notes.gif",
        tagline: "Efficient Ideas, Quick Notes!",
      };
    case "screenshot":
      return {
        screenName: "Quick Screenshot",
        screenSlug: "screenshot",
        screenIcon: "./icons/app/screenshot.gif",
        tagline: "Capture Screens in an Instant",
      };
    case "themeswitch":
      return {
        screenName: "Light/Dark Mode",
        screenSlug: "themeswitch",
        screenIcon: "./icons/app/themeswitch.gif",
        tagline: "Light or Dark, Your Choice!",
      };
    case "Webpage Annotation":
      return {
        screenName: "Plexi",
        screenSlug: "annotate",
        screenIcon: "./icons/app/annotate.gif",
        tagline: "Enhance Web Content with Annotations",
      };
    default:
      return {
        screenName: "Plexi",
        screenSlug: "home",
        screenIcon: "./icons/android-chrome-512x512.png",
        tagline: "",
      };
  }
}
