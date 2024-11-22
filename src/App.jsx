import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ParentComponent from "./components/ParentComponent";
import Event from "./components/Event";
import StateDemo from "./components/StateDemo";
import FormDemo from "./components/FormDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header></Header>
      <ParentComponent /> */}
      {/* <Event /> */}
      {/* <StateDemo /> */}
      {/* <FormDemo /> */}
      <ParentComponent />
    </>
  );
}

export default App;
