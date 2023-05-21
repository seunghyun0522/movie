import proTypes from "prop-types";
import styles from "./Movie.module.css";
function Info({ id, name, thumbnail }) {
  return (
    <div className={styles.info__main}>
      <h1 className={styles.info__name}>{name}</h1>
      <img src={thumbnail} className={styles.info__img} />
    </div>
  );
}

Info.proTypes = {
  id: proTypes.number.isRequired,
  thumbnail: proTypes.string.isRequired,
  name: proTypes.string.isRequired,
  description: proTypes.string.isRequired,
};

export default Info;
