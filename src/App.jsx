import "./App.css";
import LoginButton from "./components/Login/LoginButton.jsx";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const clientId =
  "992788890243-lvelgh74iohnglu83ft1top5mvee0una.apps.googleusercontent.com";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const handleEmailLogin = async () => {
    try {
      // Implement email and password login logic
      const emailPasswordResponse = await axios.post("/", { email, password });
      console.log(emailPasswordResponse.data);
      // Handle email and password login response here
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-6">Login to Plexi</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded py-2 px-4"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded py-2 px-4"
          />
        </div>
        <button
          onClick={handleEmailLogin}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Login with Email
        </button>
        <LoginButton />
      </div>
    </div>
  );
}

export default App;
