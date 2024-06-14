import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
    }
`;

export const MovieImage = styled.img`
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
        margin-right: 2rem;
        margin-bottom: 0;
    }
`;

export const BackButton = styled.button`
    margin-top: 1rem;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #61dafb;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 250ms;
    &:hover {
        background-color: #21a1f1;
    }
`;
