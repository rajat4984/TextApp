import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, //name can be same or not does not matter
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm
              showAlert={showAlert}
              heading="Enter your Text below"
              mode={mode}
            />
        {/* <Switch>
          <Route exact path="/about">
          <About mode={mode}/>
          </Route>
          <Route exact path="/">
           
          </Route>
        </Switch> */}
      </div>
      {/* </Router> */}


    </>
  );
}

export default App;
