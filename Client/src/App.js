import React from "react";
import "./App.css";
import "./styles/MainStyles.scss"
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        {/* <Route path="/search/:keyword" component={HomeScreen} exact /> */}
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
      </Switch>
    </Router>
  );
};

export default App;
