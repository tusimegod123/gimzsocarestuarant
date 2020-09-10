import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Restuarant from "./components/Restuarant";
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route path="//" component={Home} axact></Route>
          <Route path="/menu" component={Menu} axact></Route>
          <Route path="/aboutus" component={AboutUs} axact></Route>
          <Route path="/restuarant" component={Restuarant} axact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
