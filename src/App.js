import React from "react";
import { Header } from "./components/Header";
import { Watched } from "./components/Watched";
import { WatchList } from "./components/WatchList";
import { Add } from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {GlobalContextProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
      </GlobalContextProvider>
  );
}

export default App;
