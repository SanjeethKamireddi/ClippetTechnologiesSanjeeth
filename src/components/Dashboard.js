import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";  // Import the CSS file

const Dashboard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .post("https://hoblist.com/api/movieList", {
                category: "movies",
                language: "kannada",
                genre: "all",
                sort: "voting",
            })
            .then((response) => {
                setMovies(response.data.result);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Movie List</h1>
            {movies.length ? (
                movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img src={movie.poster} alt={movie.title} className="movie-poster" />
                        <h2>{movie.title}</h2>
                        <p><strong>Genre:</strong> {movie.genre}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Votes:</strong> {movie.voting}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
