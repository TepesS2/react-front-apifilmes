import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn, CategoryButtons } from "./style";
import { Link, useNavigate } from "react-router-dom";
import genres from "../../genres";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    const categories = Object.keys(genres);

    return (
        <>
            <Header />
            <Container>
                <h1>Filmes</h1>
                <CategoryButtons>
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => navigate(`/category/${category}`)}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </CategoryButtons>
                <MovieList>
                    {movies.map((movie) => {
                        return (
                            <Movie key={movie.id}>
                                <img src={`${imagePath}${movie.poster_path}`} alt="{movie.title}" />
                                <span>{movie.title}</span>
                                <Link to={`/${movie.id}`}>
                                    <Btn>Detalhes</Btn>
                                </Link>
                            </Movie>
                        );
                    })}
                </MovieList>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
