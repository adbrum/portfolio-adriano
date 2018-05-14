import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./Header";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";


class Home extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <Portfolio/>
                    <About/>
                    <Contact/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default Home