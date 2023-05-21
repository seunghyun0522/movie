import proTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, thumbnail, name, description }) {
  return (
    <div className={styles.movie}>
      <img src={thumbnail} alt={name} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__name}>
          <Link to={`/movie/${id}`}>{name}</Link>
        </h2>
        <p>
          {description.length > 235
            ? `${description.slice(0, 235)}...`
            : description}
        </p>
      </div>
    </div>
  );
}

Movie.proTypes = {
  id: proTypes.number.isRequired,
  thumbnail: proTypes.string.isRequired,
  name: proTypes.string.isRequired,
  description: proTypes.string.isRequired,
};

export default Movie;
