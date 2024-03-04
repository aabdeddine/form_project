import React from "react"
import { ProjectContext } from "./context"

export default function ProjectForm() {

    const {projects, setProjects} = React.useContext(ProjectContext);
    
      
      const [title, setTitle] = React.useState("");
      const [desc, setDesc] = React.useState("");
    
      const handleClick = async (e) => {
        
        let newProject= {title: title, desc:desc};
        
        setProjects([...projects, newProject])

        
        await fetch('http://127.0.0.1:8080/', { 
            method: 'POST', 
            body: JSON.stringify(newProject)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Handle data
        })
        .catch((err) => {
            console.log(err.message);
        });
    
        e.preventDefault();
      }
    // Visuel
    return (
        <>
            <h1>Ajout de projets:</h1>
            <div className="cardList">
            <form action="POST">
            <h3>Formulaire ajout de projet</h3>
            <label htmlFor="">Titre</label> <input type="text" name="title" id="title"  onChange={(e)=>{setTitle(e.target.value)}}/> <br/>
            <label htmlFor="">Description</label> <input type="text" name="desc" id="desc"  onChange={(e)=>{setDesc(e.target.value)}}/>
            
            <input type="submit" value="Ajouter" onClick={e => handleClick(e)}/>
            </form>
            </div>
        </>
    )
}



