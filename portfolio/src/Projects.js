import React, {Component} from 'react';
import PROJECTS from './data/project';

class Project extends Component {
    render(){
        console.log('this props', this.props);

        const {title, image, description, link} = this.props.project;

        return(
            <div style={{ textAlign:'center', display:'inline-block', width:"25%", margin:'4%' }} >
                <h3>{title}</h3>
                <img src={image} alt="profile" style={{ width:"100%" }}></img>
                <p>{description}</p>
                <a href={link}>Link</a>
            </div>
        );
    }
}

class Projects extends Component {
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key={Project.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;