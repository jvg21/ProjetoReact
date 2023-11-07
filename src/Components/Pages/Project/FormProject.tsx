import styled from "styled-components";
import InputForm from "../../form/input";
import { SelectForm } from "../../form/select";
import SubmitForm from "../../form/submitButton";
import { useEffect, useState } from "react";
import { CategoryType, ProjectType } from "../../form/InputProps";

const FormProjectStyle = styled.div`
    width: 100%;
    margin: 2em 0;
`;
export default function FormProject(props: { btnText: string, handleSubmit: (project : ProjectType) => void, projectData?: ProjectType }) {
    const [categories, setCategories] = useState<CategoryType[] | undefined>([]);
    const [project, setProject] = useState(props.projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => convertToCategoryType(data))
            .catch((err)=>console.log(err))
    }, []);

    function convertToCategoryType(data: any) {
        let dataInput: CategoryType[] = []
        data.map((x: any) => {
            let item: CategoryType = { id: 0, category: '' };
            item.id = x.id;
            item.category = x.category;
            return (dataInput.push(item))
        })
        setCategories(dataInput)

    }

    const submit = (e:any)=>{
        e.preventDefault();
        // console.log(project)
        props.handleSubmit(project);

    }

    function handleChange(e:any){
        setProject({...project,[e.target.name]:[e.target.value]})
        
    } 
    function handleCategory(e:any){
        setProject({...project,category:{
            id: e.target.value,
            category: e.target.options[e.target.selectedIndex].text,
        }})
        // console.log(project);
        
    } 

    return (

        <FormProjectStyle>
            <form onSubmit={submit}>
                <InputForm type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" 
                handleOnChange={handleChange} value={project.name? project.name:''}/>

                <InputForm type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento total" 
                handleOnChange={handleChange} value={project.budget?project.budget:''} />

                <SelectForm name="categoria_ID" text={props.btnText} options={categories} handleOnChange={handleCategory}/>

                <SubmitForm text={props.btnText} name='btnProjeto' />
            </form>
        </FormProjectStyle>
    );
}