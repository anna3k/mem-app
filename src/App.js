import React from "react";
import {Navbar} from "./common/navbar";
import {Redirect, Route, Switch} from 'react-router-dom';
import MemOverview from "./mem/MemOverview";
import {HOT_MEM, REGULAR_MEM} from "./mem/mem-type";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/regular"/>
            </Route>
            <Route path="/hot">
              <MemOverview memType={HOT_MEM}/>
            </Route>
            <Route path="/regular">
              <MemOverview memType={REGULAR_MEM}/>
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
