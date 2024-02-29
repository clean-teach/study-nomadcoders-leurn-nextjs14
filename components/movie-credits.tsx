import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-credits.module.css";

export async function getMovieCredits(id: string) {
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({ id }: { id: string }) {
    const moviesCredits = await getMovieCredits(id);

    return (
        <div className={styles.container}>
            <h1>출현진</h1>
            <ul>
                {moviesCredits.map(credit => (
                    <li key={credit.id}>
                        {credit.profile_path ? <img src={credit.profile_path} alt={credit.name} /> : <div className={styles.noImage} >이미지 없음</div>}
                        <div><span>{credit.name}</span> / <span>{credit.character}</span></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}