import React, {Component} from 'react'
import Projects from "./PortifolioProjects/Projects";

class Section extends Component {
    constructor(props) {
        super(props)

        this.state = {

            project: [

                {
                    id: 1,
                    name: 'eventex',
                    img: '../images/portfolio/eventex.png'
                },
                {
                    id: 2,
                    name: 'kettclub',
                    img: '../images/portfolio/kettclub.png'
                },
                {
                    id: 3,
                    name: 'swns',
                    img: '../images/portfolio/swms.png'
                },
                {
                    id: 4,
                    name: 'gestvisitor',
                    img: '../images/portfolio/gestvisitor.png'
                }
            ]
        }
    }

    render() {
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