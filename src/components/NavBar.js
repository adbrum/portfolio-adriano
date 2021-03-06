import React from 'react'


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
                    <a className="navbar-brand" href="/#pagetop">Adriano Regis</a>
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="/#pagetop"/>
                        </li>
                        <li className="page-scroll">
                            <a href="/#pagetop">Início</a>
                        </li>
                        <li className="page-scroll">
                            <a href="/#portfolio">Portfolio</a>
                        </li>
                        <li className="page-scroll">
                            <a href="/#about">Sobre</a>
                        </li>
                        <li className="page-scroll">
                            <a href="/#contact">Contate-me</a>
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