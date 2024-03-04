import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectContext } from './context'; 

export default function ProjectPage() {
    const { projects } = useContext(ProjectContext);
    const { projectId } = useParams();

    const project = projects.find(project => project.id== projectId);

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <div className="card">
            <h3>{project.title}</h3>
            <div>{project.desc}</div>
            <input type="checkbox" defaultChecked={project.done} />
        </div>
    );
}