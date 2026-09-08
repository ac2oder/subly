import { useState } from "react";
import { translateWord } from "./services/translationApi";
import "./App.css";
import WordCard from "./components/WordCard";
import { parseSubtitles } from "./services/subtitleParser";

function App() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [words, setWords] = useState([]);

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

  async function handleFileChange(event) {
    const file = event.target.files[0];
    const text = await file.text();
    const subtitles = parseSubtitles(text);

    const allWords = [];

    for (const subtitle of subtitles) {
      const words = subtitle.split(" ");
      allWords.push(...words);
    }

    const countWord = new Map();

    for (const word of allWords) {
      const cleanWord = word
      .toLowerCase()
      .replace(/[.,!?;:"'()[\]]/g, "");

      if (countWord.get(cleanWord) === undefined) {
        countWord.set(cleanWord, 1);
      } else {
        countWord.set(cleanWord, countWord.get(cleanWord) +1 );
      }
    }

    const wordsArray = Array.from(countWord);

    wordsArray.sort((a, b) => {
      return b[1] - a[1];
    })

    const wordsData = wordsArray.map(([word, count]) => {
      return {
        word: word,
        count: count
      };
    });

    setWords(wordsData);
  }

  return (
    <div className="app">
      <div className="file-input">
        <label className="file-button">
          Choose subtitles
          <input
            type="file"
            accept=".srt,.vtt"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <input
        className="translation-input"
        type="text"
        value={text}
        onChange={handleChange}
      />

      <button
        className="translate-button"
        onClick={handleTranslate}
      >
        Translate
      </button>
      
      <p className="translation-result">{translation}</p>

      {words.map((item) => {
        return (
          <WordCard
            key={item.word}
            word={item.word}
            count={item.count}
          />
        );
      })}
    </div>
  );
}

export default App;