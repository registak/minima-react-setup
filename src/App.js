import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render () {
    const title = "Hello My Minimal React Setup";
    return (
    <Fragment>
      <p>{title}</p>
    </Fragment>
    );
  }
}

export default hot(module)(App);
