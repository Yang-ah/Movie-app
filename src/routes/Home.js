import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

export const goTop = () => (document.documentElement.scrollTop = 0);

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.nextRoot}>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <div className={styles.wrap}>
          <h1 className={styles.title}>Top 20 Movies</h1>
          <section className={styles.section}>
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres ? movie.genres : null}
                runtime={movie.runtime ? movie.runtime : null}
                year={movie.year}
                rating={movie.rating}
              />
            ))}
          </section>
          <div onClick={goTop} className={styles.topBtn}>
            Top
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
