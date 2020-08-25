import React from "react";
import {Navbar} from "./common/navbar";
import {Route, Switch} from 'react-router-dom';
import {MemOverview} from "./mem/MemOverview";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <main>
          <Switch>
            <Route path="/hot">
              <MemOverview/>
            </Route>
            <Route path="/regular">
              <MemOverview/>
            </Route>
          </Switch>
        </main>

        {/*<Router>*/}
        {/*  <Switch>*/}
        {/*    <Route exact path="/">*/}
        {/*      <Redirect to="/regular" />*/}
        {/*    </Route>*/}
        {/*    <Route exact path="/regular">*/}
        {/*      <MemsList />*/}
        {/*    </Route>*/}
        {/*    <Route exact path="/hot">*/}
        {/*      <MemsList />*/}
        {/*    </Route>*/}
        {/*    <Route exact path="/addMem">*/}
        {/*      <Leyout>*/}
        {/*        <Paper>*/}
        {/*          <AddMem />*/}
        {/*        </Paper>*/}
        {/*      </Leyout>*/}
        {/*    </Route>*/}
        {/*    <Route path="*">*/}
        {/*      <Page404 />*/}
        {/*    </Route>*/}
        {/*  </Switch>*/}
        {/*</Router>*/}
      </div>
    );
  }
}

export default App;
