import { useParams, Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styles from "../css/Details.module.css";

function Details() {
  const [movie, setMoive] = useState("");
  const [loading, setloading] = useState(true);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMoive(json.data.movie);
    setloading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div className={styles.wrap}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <section className={styles.section}>
          <article className={styles.sec_txtcon}>
            <Link to={process.env.PUBLIC_URL + "/"} className={styles.homeBtn}>
              <div>🏠Home</div>
            </Link>
            <h1 className={styles.title}>{movie.title}</h1>

            <ul className={styles.txt_ul}>
              <li>
                <span>Rating</span>
                <span>⭐{movie.rating}</span>
              </li>

              <li>
                <span>Runtime</span>
                <span>{movie.runtime} minutes</span>
              </li>

              <li className={styles.genres_con}>
                <span>Genres</span>

                <ul className={styles.genres_ul}>
                  {movie?.genres?.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className={styles.sum_con}>
              <span>Summary</span>
              <p>{movie.description_full}</p>
            </div>
          </article>
          <article className={styles.sec_imgcon}>
            <img src={movie.medium_cover_image} alt={id} />
          </article>
        </section>
      )}
    </div>
  );
}

export default Details;
