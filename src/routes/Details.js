import { useParams } from "react-router-dom";
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
    <div className={styles.detail}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.wrap}>
          <section className={styles.sectionInfo}>
            <h1 className={styles.title}>{movie.title}</h1>

            <ul className={styles.txt}>
              <li>
                <span>Rating</span>
                <span>⭐{movie.rating}</span>
              </li>

              <li>
                <span>Runtime</span>
                <span>{movie.runtime} minutes</span>
              </li>

              <li className={styles.genresLi}>
                <span>Genres</span>

                <ul className={styles.genres}>
                  {movie?.genres?.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className={styles.summaryDiv}>
              <span>Summary</span>
              <p>{movie.description_full}</p>
            </div>
          </section>
          <section className={styles.sectionImg}>
            <img src={movie.medium_cover_image} alt={id} />
          </section>
        </div>
      )}
    </div>
  );
}

export default Details;
