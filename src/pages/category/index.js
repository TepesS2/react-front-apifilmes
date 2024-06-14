import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import genres from "../../genres";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Category = () => {
    const { category } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        const genreId = genres[category];
        if (genreId) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR&with_genres=${genreId}`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                });
        }
    }, [category, KEY]);

    return (
        <>
            <Header />
            <Container>
                <h1>Filmes de {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <MovieList>
                    {movies.map((movie) => (
                        <Movie key={movie.id}>
                            <img src={`${imagePath}${movie.poster_path}`} alt="{movie.title}" />
                            <span>{movie.title}</span>
                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    ))}
                </MovieList>
            </Container>
            <Footer />
        </>
    );
};

export default Category;
