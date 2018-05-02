import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return(
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <Link className="navbar-brand" to="/">Adriano Regis</Link>
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <Link to=""/>
                        </li>
                        <li className="page-scroll">
                            <Link to="">Início</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="">Portfolio</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="">Sobre</Link>
                        </li>
                        <li className="page-scroll">
                            <Link to="">Contate-me</Link>
                        </li>
                    </ul>
                </div>
                {/* /.navbar-collapse */}
            </div>
            {/* /.container-fluid */}
        </nav>
    )
}

export default NavBar