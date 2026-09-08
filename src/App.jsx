import { useState } from "react";
import { translateWord } from "./services/translationApi";
import "./App.css";
import WordCard from "./components/WordCard";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const words = [
    { word: "hello", translation: "привет" },
    { word: "house", translation: "дом" },
    { word: "movie", translation: "фильм" },
  ];

  function handleChange(event) {
    setText(event.target.value);
  }

  async function handleTranslate() {
    if (!text.trim()) {
      return
    }
    
    const result = await translateWord(text);
    setTranslation(result);
  }

  return (
    <div className="app">
      {words.map((item) => {
        return (
          <WordCard
            key={item.word}
            word={item.word}
            translation={item.translation}
          />
        );
      })}

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