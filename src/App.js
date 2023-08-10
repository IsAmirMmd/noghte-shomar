import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        خب عزیز دلم!
        <span>سلام</span>
        <span style={{ color: "#9d174d" }}>♥</span>
      </h1>
      <form>
        <textarea type="text" value={null}></textarea>
        <button className="btn">بشمار!</button>
      </form>
      <div className="counter">
        <p>تعداد نقطه ها:</p>
        <span className="dot-count">0</span>
      </div>
      <footer>
        made with <span>♥</span> by <span>IsAmirMmd</span>
      </footer>
    </div>
  );
}

export default App;
