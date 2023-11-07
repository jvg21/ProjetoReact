import styled from "styled-components";
import { InputProps } from "./InputProps";

const BtnSubmit = styled.button`
    background-color:black;
    color:white;
    padding: 15px;
    text-decoration:none;
    cursor: pointer;
    transition: 0.5s;
    border:none;

    &:hover{
        color:#ebaf24
    }
`;

export default function SubmitForm(props:InputProps){
    return(
        <div>
            <BtnSubmit name={props.name}>{props.text}</BtnSubmit>
        </div>
    );
}