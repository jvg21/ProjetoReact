import styled from "styled-components";
import { RoutesConstants } from "../../Routes/routesConstants";
import { Link } from "react-router-dom";
import Logo from "../../img/costs_logo.png"
import { BtnMenuLink } from "./BtnLink";

const HeaderContainer = styled.nav`

    background-color: black;
    height: 120px;
    width: 100%;
    display:flex;
    align-items:center;

`;
const LogoDiv = styled.div`
    margin: 0.2vh 1vw;
`;

const MenuDiV = styled.div`
    display:flex;
    align-items:center;
    justify-content:right;
    width: 90%;
`;
const MenuUL = styled.ul`
    display: flex;
    justify-content:center;
    align-items: center;
`;

const MenuLI = styled.li`
    list-style:none;
    margin-right: 1em;

`;


export function HeaderComponent() {
    return (
        <HeaderContainer>
            <LogoDiv>
                <Link to={RoutesConstants.HOME_PATH}>
                    <img src={Logo} alt="Costs" />
                </Link>
            </LogoDiv>

            <MenuDiV>
                <MenuUL>
                    <MenuLI>
                        <BtnMenuLink to={RoutesConstants.HOME_PATH} text="Home"/>
                    </MenuLI>
                    <MenuLI>
                        <BtnMenuLink to={RoutesConstants.PROJECT_PATH} text="Projetos"/>
                    </MenuLI>
                    <MenuLI>
                        <BtnMenuLink to={RoutesConstants.COMPANY_PATH} text="Empresa"/>
                    </MenuLI>
                    <MenuLI>
                        <BtnMenuLink to={RoutesConstants.CONTACT_PATH}text="Contatos"/>
                    </MenuLI>
                </MenuUL>
            </MenuDiV>

        </HeaderContainer>
    );
}