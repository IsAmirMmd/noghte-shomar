import { useEffect, useState } from "react";
import "./App.css";

const oneDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
const twoDots = ["ت", "ق"];
const threeDots = ["پ", "ث", "چ", "ژ", "ش"];
const conditionalDots = ["ی"];
let totalDot = 0;

function App() {
  // converting latin number to persian number
  useEffect(() => {
    ConvertNumberToPersion();
  }, []);

  const [dot, setDot] = useState(0);
  const [text, setText] = useState("");

  // rendering number after dot counting
  useEffect(() => {
    ConvertNumberToPersion();
  }, [dot]);

  const changeHandler = ({ target }) => {
    setText(target.value);
  };

  const countDotSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("عامو یچی بنویس که");
      setDot(0);
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
      <p className="p-content">حالا وقشته به یکی از آرزو هات برسی قشنگم ...</p>
      <form>
        <textarea
          type="text"
          value={text}
          name="text"
          onChange={changeHandler}
          placeholder="اون متنی که ذهنت رو درگیر کرده بنویس!"
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
        ساخته شده با <span>☕</span> توسط
        <a href="https://github.com/IsAmirMmd">آقا امیر</a>
        <svg
          height="24"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="24"
          data-view-component="true"
          fill="#4a044e"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      </footer>
    </div>
  );
}

export default App;

function ConvertNumberToPersion() {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  function traverse(el) {
    if (el.nodeType === 3) {
      let list = el.data.match(/[0-9]/g);
      if (list !== null && list.length !== 0) {
        for (let i = 0; i < list.length; i++)
          el.data = el.data.replace(list[i], persian[list[i]]);
      }
    }
    for (let j = 0; j < el.childNodes.length; j++) {
      traverse(el.childNodes[j]);
    }
  }
  traverse(document.body);
}
