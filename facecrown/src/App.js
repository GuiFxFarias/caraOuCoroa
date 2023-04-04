import "./App.css";
import { useState } from "react";
import coin from "./assets/coin.png";

function App() {
  const [played, setPlayed] = useState(false);

  function playCons() {
    setPlayed(!played);
  }

  return (
    <>
      <div className="back">
        <h1 className="title">Cara ou coroa</h1>
        <button className="playCoin" onClick={playCons}>
          Jogar Moeda
        </button>
        <div className="coin">
          <img src={coin} alt="Moeda" />
        </div>
      </div>
    </>
  );
}

export default App;
