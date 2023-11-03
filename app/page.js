"use client";
import './globals.css';
import  { useState } from 'react';
import { initial_movie_list } from './Data.js';
import Header from './Header.js';
import Movierow from './Movie-row.js';
import Footer from './Footer.js';

export default function Home() {
    const [movies, setMovies] = useState(initial_movie_list);
    const handleDelete = (movieData) => {
        const updatedMovies = movies.filter((movie) => movie !== movieData);
        setMovies(updatedMovies);
    };
    const handleLike = (id, votes) => {
        const updatedMoviesData = movies.map(movie => 
            movie.id === id ? { ...movie, votes } : movie
        );
        const sortedData = updatedMoviesData.sort(compare);
        setMovies(sortedData);
        setMovies(updatedMoviesData);
        
        function compare (x,y){ 
            if (x.votes < y.votes) {
                return 1;
            } else if (x.votes > y.votes) {
                return -1;
            } else {
                return 0;
            }
        };        
    };
    
    
    return (
        <>
            <Header />
            {movies.map((movie) => (
                <Movierow
                    key={movie.id}
                    movie={movie}
                    onDelete={() => handleDelete(movie)}
                    handleLike={handleLike}

                />
            ))}
            <Footer />
        </>
    );
};

