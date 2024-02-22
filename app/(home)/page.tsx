export const metadata = {
    title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 로딩 속도를 체감하기 위한 테스트 코드
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function RootPage() {
    const movies = await getMovies();
    return <div>{JSON.stringify(movies)}</div>;
}