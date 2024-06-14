import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    h1 {
        text-align: center;
        margin: 2rem 0;
        font-size: 2.5rem;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #282c34;
    padding: 1rem;
    border-radius: 10px;
    color: #fff;
    img {
        width: 180px;
        border-radius: 10px;
        margin-bottom: 1rem;
    }
    span {
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
    }
    a {
        transition: all 0.3s;
    }
    a:hover {
        transform: scale(1.05);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
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

export const CategoryButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    button {
        margin: 0 1rem;
        padding: 0.7rem 1.5rem;
        border: none;
        border-radius: 10px;
        background-color: #61dafb;
        color: #fff;
        cursor: pointer;
        transition: all 250ms;
        &:hover {
            background-color: #21a1f1;
        }
    }
`;
