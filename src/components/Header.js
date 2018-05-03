import React from 'react'
import image from '../images/profile.png'

const Header = (props) => {
    return (
        <div>
            <header>
                <div id="page-top" className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-responsive" src={image} alt=""/>
                                <div className="intro-text">
                                    <span className="name">Desenvolvimento Eficaz</span>
                                    <hr className="star-light"/>
                                        <span className="skills">Engenheiro de Software</span>
                                </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header