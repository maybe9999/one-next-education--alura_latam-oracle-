import { Link } from "react-router-dom";

import styled from 'styled-components';

const HeaderStyled = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #262626;
    box-sizing: border-box;
`

const UlStyled = styled.ul`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
`

const LiStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 0 12.5px;
    box-sizing: border-box;
    width: 30%;
    min-width: 40%;
    max-width: 50%;
`

const LinkStyled = styled(Link)`
    background-color: none;
    border: 2px solid white;
    border-radius: 10px;
    width: 100%;
    padding: 20px 0px;
    box-sizing: border-box;
    text-align: center;
    white-space: nowrap;
    color: white;
    text-decoration: none;
`

const Header = () => {
    return <>
        <HeaderStyled>
            <img src="/img/LogoMain.png" alt="Logo Alura Flix"/>
            <UlStyled>
                <LiStyled><LinkStyled to="/">HOME</LinkStyled></LiStyled>
                <LiStyled><LinkStyled to="/nuevo-video">NUEVO VIDEO</LinkStyled></LiStyled>
            </UlStyled>
        </HeaderStyled>
    </>
}

export default Header