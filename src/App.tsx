import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import routes from "./Routes";
import "antd/dist/antd.less";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path}></Route>
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}
export default App;
