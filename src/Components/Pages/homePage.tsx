import styled from 'styled-components';
import savings from '../../img/savings.svg'
import { RoutesConstants } from '../../Routes/routesConstants';
import { BtnNewProjectLink } from '../layout/BtnLink';

const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4em;
`;
const HomeTitle = styled.h1`
    font-size:2.5em;
    margin-bottom: .5em;
`; 
const HomeTitleSpan = styled.span`
    color: #ebaf24;
    padding: 0 .2em;
    background-color: black;
`; 
const HomeSubTitle = styled.p`
    margin-bottom:1.5em;
    color: #7b7b7b;
`;
const HomeImage = styled.img`
    width: 350px;
    margin: 2em 0;
`;

export function HomePage(){
    return(
        <HomeContainer>
            <HomeTitle>Bem-vindo ao <HomeTitleSpan>Costs</HomeTitleSpan></HomeTitle>
            <HomeSubTitle>Comece a gerenciar os seus projetos agora mesmo!</HomeSubTitle>

            <BtnNewProjectLink to={RoutesConstants.NEW_PROJECT_PATH} text='Criar Projeto'></BtnNewProjectLink>

            <HomeImage src={savings} alt="costs" />
        </HomeContainer>
    )
}