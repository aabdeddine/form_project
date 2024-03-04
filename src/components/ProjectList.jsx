import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectContext } from "./context"

export default function ProjectList() {

    // Logique ici.
    // [...]
    const { projects} = React.useContext(ProjectContext);
    // Visuel
    return (
        <>
            <h1>Liste des projets:</h1>
            <div className="cardList">
            { projects.map((project, index) => {
                return (
                    <ProjectItem project={project} key={index} />
                )
            })}
            </div>
        </>
    )
}
