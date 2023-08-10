import { useEffect, useState } from "react";
import "./App.css";

const oneDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
const twoDots = ["ت", "ق"];
const threeDots = ["پ", "ث", "چ", "ژ", "ش"];
const conditionalDots = ["ی"];
let totalDot = 0;

function App() {
  const [dot, setDot] = useState(0);
  const [text, setText] = useState("");

  const changeHandler = ({ target }) => {
    setText(target.value);
  };

  const countDotSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("دادا یچی بنویس که");
      return;
    }
    countHandler(text);
  };

  const countHandler = (text) => {
    totalDot = 0;

    for (let i = 0; i < text.length; i++) {
      if (oneDots.includes(text[i])) totalDot += 1;
      else if (conditionalDots.includes(text[i])) {
        if (i !== text.length - 1) if (text[i + 1] !== " ") totalDot += 2;
      } else if (twoDots.includes(text[i])) totalDot += 2;
      else if (threeDots.includes(text[i])) totalDot += 3;
    }

    setDot(totalDot);
  };

  return (
    <div className="App">
      <h1>
        خب عزیز دلم!
        <span>سلام</span>
        <span style={{ color: "#9d174d" }}>♥</span>
      </h1>
      <form>
        <textarea
          type="text"
          value={text}
          name="text"
          onChange={changeHandler}
        ></textarea>
        <button onClick={(e) => countDotSubmit(e)} className="btn">
          بشمار!
        </button>
      </form>
      <div className="counter">
        <p>تعداد نقطه ها:</p>
        <span className="dot-count">{dot}</span>
      </div>
      <footer>
        made with <span>♥</span> by <span>IsAmirMmd</span>
      </footer>
    </div>
  );
}

export default App;
