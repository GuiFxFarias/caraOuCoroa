import "./App.css";
import { useState } from "react";

function App() {
  const [played, setPlayed] = useState(false);

  function playCons() {
    setPlayed(!played);
  }

  return (
    <>
      <div className="back">
        <h1 className="title">Cara ou coroa</h1>
        <div className="coin"></div>
        <button className="playCoin" onClick={playCons}>
          Jogar Moeda
        </button>
      </div>
    </>
  );
}

export default App;
