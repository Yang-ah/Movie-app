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
