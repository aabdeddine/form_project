import React from "react";
import { ProjectContext } from "./context"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

export default function ProjectItem({ project }) {

    const { projects, setProjects} = React.useContext(ProjectContext)
    const { title, desc = "/", done } = project;

    const handleChange = () => {
        const newProjects = [...projects]
        const targetProject = newProjects.find(project => project.title == title)
        targetProject.done = !targetProject.done
        setProjects(newProjects);
    }
    
    return (
        <div className="card">
            <Link to={`/project/${title}`}>
                <h3>{title}</h3>
            </Link>
            <div>{desc}</div>
            <input type="checkbox" defaultChecked={done} onChange={handleChange} />
        </div>
    )
}

ProjectItem.propTypes = {
    project : PropTypes.object
}

