import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #1c1c1c;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

const Logo = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

const Nav = styled.nav`
    a {
        color: #fff;
        text-decoration: none;
        margin-left: 1rem;
        font-size: 1rem;
        &:hover {
            color: #61dafb;
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>MovieApp</Logo>
            <Nav>
                <Link to="/">Home</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
