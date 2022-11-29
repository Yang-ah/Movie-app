import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({
  coverImg,
  title,
  summary,
  genres,
  id,
  runtime,
  year,
  rating,
}) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.wrap}>
        <div className={styles.wrap_hover}></div>
        <span className={styles.hover_txt}>Go Detail👉🏻</span>
        <h3>{`${title}  ⭐${rating}`}</h3>
        <section className={styles.top_sec}>
          <h4>
            Genres : {genres[0]}
            {`   |   release : ${year}`}
            {runtime ? `   |   ${runtime} min` : null}
          </h4>
        </section>
        <img src={coverImg} alt={title} />
        <p className={styles.summary}>{summary}</p>
      </div>
    </Link>
  );
}

export default Movie;
