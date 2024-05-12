import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  const [istate, setistate] = useState();
  const [state, setstate] = useState([]);

  const handleonchange = (e) => {
    setistate(e.target.value);
    console.log(istate);
  };
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  let handleonsubmit = () => {
    if (istate != "") {
      setstate([...state, istate]);
      console.log(state);
      setistate("");

      // setistate('')
    }
  };

  let handleondel = (mp) => {
    let fstate = state.filter((f) => f !== mp);
    setstate(fstate);
  };

  return (
    <>
      <h1 style={{ color: randomColor }}>{istate}</h1>

      <input
        type="text"
        value={istate}
        placeholder="enter"
        onChange={handleonchange}
      />
      <button onClick={handleonsubmit}>Add</button>

      <ul>
        {state.map((mp) => (
          <li>
            {mp}
            <button onClick={() => handleondel(mp)}>del</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
