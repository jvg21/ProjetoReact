import styled from "styled-components";
import { InputProps } from "./InputProps";

const InputDiv = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom: 1em;
    label{
        margin-bottom: .6em;
        font-weight: bold;
    }

`;
const Input = styled.input`
    padding: .7em;
    border-radius:0;
    border:none;

    &::placeholder{
        color:#7b7b7b;
    }
`;

export default function InputForm(props:InputProps){
    return(
        <InputDiv>
        {
            props.text &&
            <label htmlFor={props.name}>{props.text}</label>
        }
            <Input 
            type={props.type} 
            name={props.name} 
            id={props.name} 
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            value={props.value}
            />
        </InputDiv>
    );
}