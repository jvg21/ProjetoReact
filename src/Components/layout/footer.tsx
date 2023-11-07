import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const FooterContainer = styled.footer`
    width:100%;
    background-color: black;
    color: white;
    padding: 1em;
    text-align:center;
`
const SocialList = styled.ul`
    display:flex;
    justify-content:center;
    list-style-type: none;
`;
const SocialListLi = styled.li`
    margin: 0 1em;
    font-size: 2em;
    &:hover{
        color: #EBAF24;
        cursor: pointer;
    }
`;
const CopyRight = styled.p`
    margin-top: 2em;
`;
const CopyRightSpan = styled.span`
    color: #EBAF24;
    font-weight: bold;
`;

export function FooterComponent() {
    return (
        <FooterContainer>
            <SocialList>
                <SocialListLi>
                    <FaFacebook />
                </SocialListLi>
                <SocialListLi>
                    <FaInstagram />
                </SocialListLi>
                <SocialListLi>
                    <FaLinkedin />
                </SocialListLi>
            </SocialList>

            <CopyRight><CopyRightSpan>Costs</CopyRightSpan> &copy; 2023</CopyRight>
        </FooterContainer>
    );
}