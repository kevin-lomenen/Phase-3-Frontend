import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import DefaultPage from "./components/pages/DefaultPage";
import Recipes from "./components/pages/Recipes";
import RecipeDetails from "./components/pages/RecipeDetails";
import Signup from "./components/layout/Signup";
import Login from "./components/layout/Login";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:recipe_id" component={RecipeDetails} />
          <Route path ="/Signup" component={Signup} />
          <Route path ="/Login" component={Login} />
          <Route component={DefaultPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
