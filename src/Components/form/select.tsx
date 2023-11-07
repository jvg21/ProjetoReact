import styled from "styled-components";
import { InputProps } from "./InputProps";


const SelectDiv = styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom: 1em;
    label{
        margin-bottom: .6em;
        font-weight: bold;
    }

`;
const FormSelect = styled.select`
    padding: .7em;
    border-radius:0;
    border:none;

    &::placeholder{
        color:#7b7b7b;
    }
`;

export function SelectForm(props: InputProps) {
    return (
        <SelectDiv>
            {
                props.text &&
                <label htmlFor={props.name}>{props.text}</label>
            }
            <FormSelect  name={props.name} id={props.name} defaultValue={props.value||'selected'} onChange={props.handleOnChange} >
                <option value="selected" disabled hidden>Selecione uma opção</option>
                {
                    props.options &&
                    props.options.map((x)=>(
                        <option key={x.id} value={x.id}>{x.category}</option>
                    ))
                }
            </FormSelect>

        </SelectDiv>

    );
}