import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnNewProjectStyle = styled.a`
    background-color: black;
    color:white;
    padding:0.5em 1em;
    text-decoration:none;
    transition:all 0.5s ease;

    &:hover{
        color:#EBAF24
    }
`;
const BynHeaderStyle = styled.a`
    color: white;

    &:hover{
        color: #EBAF24;
    }
`;

function GenericLink(props :{to : string,children:React.ReactNode}){
    return(
        <Link style={{ textDecoration:"none"}} to={props.to}>{props.children}</Link>
    );
}

export function BtnNewProjectLink(props :{to : string,text:string}){
    return(
    <GenericLink to={props.to} >
        <BtnNewProjectStyle>{props.text}</BtnNewProjectStyle>
    </GenericLink>
    );
}

export function BtnMenuLink(props :{to : string,text:string}){
    return(
    <GenericLink to={props.to} >
        <BynHeaderStyle>{props.text}</BynHeaderStyle>
    </GenericLink>
    );
}




