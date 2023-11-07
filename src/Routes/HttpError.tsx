import styled from "styled-components";

const ErrorContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;

`;
export function HttpError(props:{errorCode:number,mensage:string}){
    return(
        <ErrorContainer>
            <h1>{props.errorCode} Error</h1>
            <p>{props.mensage}</p>

        </ErrorContainer>
    );
}