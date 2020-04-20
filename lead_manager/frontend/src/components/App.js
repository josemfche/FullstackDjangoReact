import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./layout/Header.js";
import Dasboard from "./leads/Dasboard";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { loadUser } from "../actions/auth";

import Alert from "./layout/Alert.js";

import { Provider } from "react-redux";
import store from "../store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alert />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dasboard} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
