import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import LinkProject from "./LinkProject";
import Project_01 from "./Project_01";


class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            view_project: false,
            id_project: '',
            img: ''
        }

        this.viewHandle = this.viewHandle.bind(this)
    }

    viewHandle(id, img) {
        this.setState({
            view_project: true,
            id_project: id,
            img: img
        })
    }

    render() {
        if (this.state.view_project === false) {
            return (
                <div>
                    {JSON.stringify(this.state.view_project)}
                    {Object.keys(this.props.project).map(key => {
                        const project = this.props.project[key]
                        return (
                            <div onClick={() => this.viewHandle(project.id, project.img)}
                                 key={key}>
                                <LinkProject key={key} project={project}/>
                                {/*<Route exact path={`/project/${this.props.project[key].name}`}*/}
                                {/*render={() => <Project_01 project={project}/>}/>*/}
                            </div>
                        )
                    })}
                </div>
            )
        }


        if (this.state.view_project) {
            {

                if (this.state.id_project === 1) {
                    return (
                        <Project_01 src={this.state.img}/>
                    )
                }
                if (this.state.id_project === 2) {
                    return (
                        <div>
                            {JSON.stringify('XXX 02: ', this.state.view_project)}
                        </div>
                    )
                }
                if (this.state.id_project === 3) {
                    return (
                        <div>
                            {JSON.stringify('XXX 03: ', this.state.view_project)}
                        </div>
                    )
                }
            }
        }

        // if (this.state.view_project) {
        //     return (
        //         <div>
        //             <div>
        //                 {JSON.stringify('XXX: ', this.state.view_project)}
        //             </div>
        //         </div>
        //
        //     )
        // }
    }
}


export default Projects