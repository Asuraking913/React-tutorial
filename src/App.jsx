import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Sidenav from "./components/Sidenav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidenav />
    </div>
  );
}

export default App;
