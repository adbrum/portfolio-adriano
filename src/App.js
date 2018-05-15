import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import 'font-awesome/css/font-awesome.min.css'
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <Router>
            <div className='App'>
                <NavBar/>
                <Route exact path='/' component={Home}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Footer}/>
            </div>
        </Router>
    );
  }
}

export default App;
