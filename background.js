import browser from "webextension-polyfill";
import supabase from "./src/utils/supabase_client";

async function handleMessage({ action, value }, response) {
  if (action === "fetch") {
    const result = await fetch("https://meowfacts.herokuapp.com/");

    const { data } = await result.json();

    response({ message: "Successfully signed up!", data });
  } else if (action === "signup") {
    const result = await supabase.auth.signUp(value);
    response({ message: "Successfully signed up!", data: result });
  } else if (action === "signin") {
    console.log("requesting auth");
    const { data, error } = await supabase.auth.signInWithPassword(value);
    response({ data, error });
  } else if (action === "getSession") {
    response({ data: supabase.auth.getSession().then(response) });
  } else if (action === "signout") {
    const { error } = await supabase.auth.signOut();
    response({ data: null, error });
  } else {
    response({ data: null, error: "Unknown action" });
  }
}

// @ts-ignore
browser.runtime.onMessage.addListener((msg, sender, response) => {
  handleMessage(msg, response);
  return true;
});
