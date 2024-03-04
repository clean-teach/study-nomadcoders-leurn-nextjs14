import { API_URL } from "../app/constants";
import styles from "../styles/movie-proveders.module.css";

export async function getMovieProviders(id: string) {
    const response = await fetch(`${API_URL}/${id}/providers`);
    return response.json();
}

export default async function MovieProviders({ id }: { id: string }) {
    const moviesProviders = await getMovieProviders(id);
    if (Object.keys(moviesProviders).length === 0 || !moviesProviders) {
        return <div className={styles.container}>공급자 없음</div>
    }
    const national = moviesProviders.KR || moviesProviders.US || moviesProviders[Object.keys(moviesProviders)[0]];
    const providers = national.flatrate || national.buy;

    return (
        <div className={styles.container}>
            <dl>
                <dt>공급자 : </dt>
                <dd><a href={national.link}>Themovie DB</a></dd>
            </dl>
            <ul>
                {providers.map(provider => {
                    const imgPath = provider.logo_path.indexOf('http') == 0 ? provider.logo_path : `https://media.themoviedb.org/t/p/original${provider.logo_path}`;

                    return <li key={provider.provider_id}>
                        <img src={imgPath} alt={provider.provider_name} />
                    </li>
                })}
            </ul>
        </div>
    );
}