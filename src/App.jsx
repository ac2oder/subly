import { useState } from "react";
import { translateWord } from "./services/translationApi"
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  async function handleTranslate() {
    const result = await translateWord(text);
    setTranslation(result);
  }

  return (
    <div className="app">
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />

      <button onClick={handleTranslate}>
        Translate
      </button>
      <p>{translation}</p>
    </div>
  );
}

export default App;