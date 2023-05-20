import proTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.proTypes = {
  coverImg: proTypes.string.isRequired,
  title: proTypes.string.isRequired,
  summary: proTypes.string.isRequired,
  genres: proTypes.arrayOf(proTypes.string).isRequired,
};

export default Movie;
