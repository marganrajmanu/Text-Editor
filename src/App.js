import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from './TextForm'
import Alert from "./Alert";

function App() {

  const [mode, setMode] = useState(false);
  const toggleMode = () => mode ? (setMode(false), showAlert("Light mode enabled", "success"), document.body.style.backgroundColor = "white") : (setMode(true), showAlert("Dark mode enabled", "success"), document.body.style.backgroundColor = "black");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;