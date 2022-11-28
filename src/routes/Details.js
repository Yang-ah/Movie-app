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
    console.log(json.data.movie);
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
          <h1>{movie.title}</h1>
          <div className={styles.container}>
            <section className={styles.sectionInfo}>
              <p>
                {`rating : ${movie.rating}
                runtime : ${movie.runtime} minutes`}
              </p>
              <ul>
                <li>genres : &nbsp;</li>
                {movie?.genres?.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <p>{movie.description_full}</p>
            </section>
            <section className={styles.sectionImg}>
              <img src={movie.medium_cover_image} alt={id} />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
