import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-proveders.module.css";

export async function getMovieProviders(id: string) {
    const response = await fetch(`${API_URL}/${id}/providers`);
    return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
    const moviesProviders = await getMovieProviders(id);
    console.log(moviesProviders);
    console.log(Object.keys(moviesProviders).length);

    return (
        <div className={styles.container}>
            <h1>공급자</h1>
            <ul>
                {/* {.map(provider => {
                    <div>provider.flatrate</div>
                })} */}
            </ul>
        </div>
    );
}