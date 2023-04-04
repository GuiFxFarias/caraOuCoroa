import "./App.css";
import { useState } from "react";
import coin from "./assets/coin.png";

function App() {
  const [played, setPlayed] = useState(false);
  const [up, setUp] = useState("");
  const [rotate, setRotate] = useState("");

  function playCons() {
    setPlayed(!played);

    if (played === true) {
      setRotate("rotate");
      setUp("up");
    } else {
      setUp("");
      setRotate("");
    }
    
  }

  return (
    <>
      <div className="back">
        <h1 className="title">Cara ou coroa</h1>
        <button className="playCoin" onClick={playCons}>
          Jogar Moeda
        </button>
        <div className="coin">
          <div className={up}>
            <img className={rotate} src={coin} alt="Moeda" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
