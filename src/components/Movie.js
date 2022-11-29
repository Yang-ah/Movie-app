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
        <div className={styles.hover}></div>
        <span className={styles.hoverTxt}>Go Detail👉🏻</span>
        <h3>{`${title}  ⭐${rating}`}</h3>
        <div className={styles.top}>
          <h4>
            Genres : {genres[0]}
            {`   |   release : ${year}`}
            {runtime ? `   |   ${runtime} min` : null}
          </h4>
        </div>
        <img src={coverImg} alt={title} />
        <p className={styles.summary}>{summary}</p>
      </div>
    </Link>
  );
}

export default Movie;
