import React from "react";
import "./App.css";
import Leyout from "./component/Layouts/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import AddMem from "./component/AddMem";
import Page404 from "./component/Layouts/Page404";
import MemsList from "./component/MemsList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>WORKS</h1>

      </div>
    );
  }
}

export default App;
