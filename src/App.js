import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Movie from "./pages/movie";
import { GlobalStyle } from "./globalStyles";  // Certifique-se de que o caminho esteja correto

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/category/:category" exact element={<Category />} />
                <Route path="/:id" exact element={<Movie />} />
            </Routes>
        </>
    );
};

export default App;
