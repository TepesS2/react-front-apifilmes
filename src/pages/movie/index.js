import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, MovieDetails, MovieImage, BackButton } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [movie, setMovie] = useState([]);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });
    }, [id, KEY]);

    return (
        <>
            <Header />
            <Container>
                <MovieDetails>
                    <MovieImage
                        src={`${imagePath}${movie.poster_path}`}
                        alt="{movie.title}"
                    />
                    <div>
                        <h1>{movie.title}</h1>
                        <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
                        <p><strong>Descrição:</strong> {movie.overview}</p>
                        <Link to="/">
                            <BackButton>Voltar</BackButton>
                        </Link>
                    </div>
                </MovieDetails>
            </Container>
            <Footer />
        </>
    );
};

export default Movie;
