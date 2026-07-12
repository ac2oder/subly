import { useEffect } from "react";
import "./App.css";
import { translateWord } from "./services/translationApi";

function App() {
  useEffect(() => {
    async function test() {
      try {
        const translation = await translateWord("Learn languages through subtitles");
        console.log("Перевод:", translation);
      } catch (error) {
        console.error(error);
      }
    }

    test();
  }, []);

  return (
    <div className="app">
      <h1>Subly</h1>
      <p>Learn languages through subtitles</p>

      <button>Upload subtitles</button>
    </div>
  );
}

export default App;