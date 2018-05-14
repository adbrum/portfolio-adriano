import React, {Component} from 'react'
import LinkProject from "./LinkProject";
import Project_01 from "./Project/Project_01";
import Project_02 from "./Project/Project_02";
import Project_03 from "./Project/Project_03";
import Project_04 from "./Project/Project_04";
import Project_05 from "./Project/Project_05";


class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            view_project: false,
            id_project: '',
            img: '',
            projects: {
                1: '<Project_01 onClickHandle={this.onClickHandle} src={this.state.img}/>',
                2: '<Project_02 onClickHandle={this.onClickHandle} src={this.state.img}/>',
                3: '<Project_03 onClickHandle={this.onClickHandle} src={this.state.img}/>',
                4: '<Project_04 onClickHandle={this.onClickHandle} src={this.state.img}/>',
                5: '<Project_05 onClickHandle={this.onClickHandle} src={this.state.img}/>',
            }
        }

        this.viewHandle = this.viewHandle.bind(this)
        this.onClickHandle = this.onClickHandle.bind(this)
    }

    viewHandle(id, img) {
        this.setState({
            view_project: true,
            id_project: id,
            img: img
        })
    }

    onClickHandle = () => {
        window.location.href = '/#portfolio';
    }

    render() {
        if (this.state.view_project === false) {
            return (
                <div>
                    {Object.keys(this.props.project).map(key => {
                        const project = this.props.project[key]
                        return (
                            <div onClick={() => this.viewHandle(project.id, project.img)}
                                 key={key}>
                                <LinkProject key={key} project={project}/>
                            </div>
                        )
                    })}
                </div>
            )
        }

        if (this.state.view_project) {
            {
                if (this.state.id_project === 1) {
                    return <Project_05 onClickHandle={this.onClickHandle} src={this.state.img}/>
                }
                if (this.state.id_project === 2) {
                    return <Project_01 onClickHandle={this.onClickHandle} src={this.state.img}/>
                }
                if (this.state.id_project === 3) {
                    return <Project_02 onClickHandle={this.onClickHandle} src={this.state.img}/>
                }
                if (this.state.id_project === 4) {
                    return <Project_03 onClickHandle={this.onClickHandle} src={this.state.img}/>
                }if (this.state.id_project === 5) {
                    return <Project_04 onClickHandle={this.onClickHandle} src={this.state.img}/>
                }
            }
        }
    }
}


export default Projects