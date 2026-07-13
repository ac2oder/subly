import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <p>{text}</p>
    </div>
  );
}

export default App;