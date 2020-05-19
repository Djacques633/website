import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Body } from './pages';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Route, Switch,Link,Redirect } from "react-router-dom";

// Pages
import MainPage from "./pages/index"
import NotFoundPage from "./pages/404.jsx";
class App extends Component {
  render() {
    return <Router>
      <Switch>
      <Route exact path = "/" component = { MainPage }></Route>
      <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  }

}

export default App;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
