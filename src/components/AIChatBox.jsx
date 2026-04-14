import { useState } from "react";

function AIChatBox() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const askAI = () => {
    const userPrompt = prompt.toLowerCase();

    if (userPrompt.includes("rose")) {
      setResponse(
        "Rose waste can be used for perfume, rose water, soap, and natural dyes."
      );
    } else if (
      userPrompt.includes("marigold")
    ) {
      setResponse(
        "Marigold waste can be converted into incense sticks and compost."
      );
    } else if (
      userPrompt.includes("jasmine")
    ) {
      setResponse(
        "Jasmine flowers can be used for essential oils and perfumes."
      );
    } else {
      setResponse(
        "Floral waste can be reused for compost and eco-friendly products."
      );
    }
  };

  return (
    <div className="chatbox-wrapper">
      <h2>🤖 AI Sustainability Assistant</h2>

      <input
        type="text"
        placeholder="Ask about flower waste..."
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
      />

      <button
        className="glass-btn"
        onClick={askAI}
      >
        Ask AI
      </button>

      {response && (
        <div className="chat-response">
          {response}
        </div>
      )}
    </div>
  );
}

export default AIChatBox;