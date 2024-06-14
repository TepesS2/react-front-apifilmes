import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #1c1c1c;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2023 MovieApp. All rights reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
