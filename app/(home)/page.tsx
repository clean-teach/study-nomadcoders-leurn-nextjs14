"use client"

import { useEffect, useState } from "react"

export default function Root() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMovies = async () => {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [])
    useEffect(() => {
        console.log(movies)
    }, [movies])

    return <div>
        {isLoading ? 'Loading...' : JSON.stringify(movies)}
    </div>
}