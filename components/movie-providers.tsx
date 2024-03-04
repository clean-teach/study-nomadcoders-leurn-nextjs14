import { API_URL } from "../app/constants";
import styles from "../styles/movie-proveders.module.css";

export async function getMovieProviders(id: string) {
    const response = await fetch(`${API_URL}/${id}/providers`);
    return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
    const moviesProviders = await getMovieProviders(id);

    return (
        <div className={styles.container}>
            <dl>
                <dt>공급자 : </dt>
                <dd><a href={moviesProviders.US.link}>Themovie DB</a></dd>
            </dl>
            <ul>
                {moviesProviders.US.buy.map(provider =>
                    <li key={provider.provider_id}>
                        <img src={provider.logo_path} alt={provider.provider_name} />
                    </li>
                )}
            </ul>
        </div>
    );
}