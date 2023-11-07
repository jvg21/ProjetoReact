import { Outlet } from "react-router-dom";
import { HeaderComponent } from "./header";
import styled from "styled-components";
import { FooterComponent } from "./footer";

const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content:space-between;
    margin: 0 auto;
    flex-wrap:wrap;
`;
export function Layout() {
    return (
        <>
            <HeaderComponent />
            <MainContainer>
                <Outlet />
            </MainContainer>
            <FooterComponent />
        </>
    );
}