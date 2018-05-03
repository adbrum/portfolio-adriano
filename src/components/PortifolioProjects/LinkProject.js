import React from 'react'
import { Link, Route } from "react-router-dom";
// import Projects from "./Projects";

const LinkProject = (props) => {
    const {project} = props

    return(
        <div className="col-sm-4 portfolio-item">

            <Link to={`/project/${project.name}`}className="portfolio-link" data-toggle="modal">
                <div className="caption">
                    <div className="caption-content">
                        <i className="fa fa-search-plus fa-3x"/>
                    </div>
                </div>
                <img src={project.img}  className="img-responsive" alt=""/>
            </Link>
        </div>
    )
}

export default LinkProject