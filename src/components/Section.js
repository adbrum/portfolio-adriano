import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
// import kettclub from '../images/portfolio/kettclub.png'
// import gestvisitor from '../images/portfolio/gestvisitor.png'
// import swns from '../images/portfolio/swms.png'
// import eventex from '../images/portfolio/eventex.png'
import LinkProject from "./PortifolioProjects/LinkProject";
import Projects from "./PortifolioProjects/Projects";
// import Project01 from "./PortifolioProjects/Project01";

class Section extends Component {
    constructor(props) {
        super(props)

        this.state = {

            project: [
                {
                    id: 1,
                    name: 'kettclub',
                    img: '../images/portfolio/kettclub.png'
                },
                {
                    id: 2,
                    name: 'gestvisitor',
                    img: '../images/portfolio/gestvisitor.png'
                },
                {
                    id: 3,
                    name: 'swns',
                    img: '../images/portfolio/swms.png'
                },
                {
                    id: 4,
                    name: 'eventex',
                    img: '../images/portfolio/eventex.png'
                }
            ]
        }
    }

    render() {
        {JSON.stringify(this.countryFlagByCode)}
        return (
            <div>
                <hr id="portfolio"/>
                {/*Portfolio Grid Section*/}
                <section >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Portfolio</h2>
                                <hr className="star-primary"/>
                            </div>
                        </div>
                        <div className="row">
                            <Projects project={this.state.project}/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Section