import { API_URL } from "../app/constants";
import styles from "../styles/movie-similar.module.css";
import Movie from "./movie";

export async function getMovieSimilar(id: string) {
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
    const moviesSimilar = await getMovieSimilar(id);

    return (
        <div className={styles.container}>
            <h1>비슷한 영화</h1>
            <div className={styles.list}>
                {moviesSimilar.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                    />
                ))}
            </div>
        </div>
    );
}