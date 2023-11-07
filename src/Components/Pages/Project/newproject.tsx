import styled from "styled-components";
import FormProject from "./FormProject";
import { ProjectType } from "../../form/InputProps";

const NewProjectContainer = styled.div`
    width:  450px;
    margin: 0 auto;
    padding: 3em;;
`;
export function NewProject(){
    function createPost(project:ProjectType){
        project.cost = 0;
        project.services = [];
        console.log(JSON.stringify(project));
        
        fetch("http://localhost:5000/projects",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp)=>resp.json()).then((data)=>{
            console.log(data);
            //redirects            
        }).catch((error)=> console.log(error))
        
        // fetch("http://localhost:5000/projects",{
        //     method:'POST',
        //     headers: {'content-type':'aplication/json'},
        //     body: JSON.stringify(project)
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     // console.log(data)
        //  })
        // .catch((err)=>console.log(err))
    }
    return(
        <NewProjectContainer>
            <h1 style={{marginBottom:'0.5em'}}>CriarProjeto</h1>
            <p style={{color:'#7b7b7b'}}>Crie seu projeto para depois adicionar serviços</p>
            <FormProject btnText="Criar Projeto" handleSubmit={createPost}/>
        </NewProjectContainer>
        )
}