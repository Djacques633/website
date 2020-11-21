import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Body } from './pages';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Route, Switch,Link,Redirect } from "react-router-dom";

// Pages
import MainPage from "./pages/HomePage/index.jsx";
import NotFoundPage from "./pages/404.jsx";
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx";
class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path = "/" component = { MainPage }></Route>
        <Route exact path = "/projects/" component = {ProjectPage}></Route>
        <Route exact path = "/404" component={NotFoundPage}></Route>
        <Redirect to = "/404"></Redirect>
      </Switch>
    </Router>
  }

}

export default App;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
