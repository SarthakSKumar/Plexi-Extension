import React, { useState } from "react";
import Message from "../Cards/Message";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [...messages, { role: "user", content: inputText }],
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        // ChatGPT response
        const chatGptResponse = response.choices[0].message.content;

        setMessages([...messages, { text: inputText, isUser: true }]);
        setMessages([...messages, { text: chatGptResponse, isUser: false }]);
      } catch (error) {
        console.error("Error fetching response from ChatGPT:", error);
      }
    }
  };

  return (
    <div className={`max-w-md mx-auto p-4 dark:bg-gray-800 bg-white`}>
      <div className={`h-48 overflow-y-auto dark:text-white text-black`}>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
      </div>
      <div className={`mt-4 flex 'dark:text-white text-black`}>
        <input
          type="text"
          className={`flex-1 p-2 border rounded-md 'dark:bg-gray-800 dark:border-gray-700 bg-white border-gray-300`}
          placeholder="Type a message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className={`ml-2 dark:bg-gray-700 hover:dark:bg-gray-600 bg-green-700 text-white font-bold py-2 px-4 rounded`}
          onClick={(event) => handleSendMessage(event)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
