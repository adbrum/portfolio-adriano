import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./Header";


class Home extends Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>HOme</h1>
                    {/*<Route exact path='/' component={Home}/>*/}
                </div>
            </Router>
        )
    }
}

export default Home