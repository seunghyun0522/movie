import proTypes from "prop-types";

function Info({ id, name, thumbnail }) {
  return (
    <div>
      <h3>{id}</h3>
      <h1>{name}</h1>
      <img src={thumbnail} />
    </div>
  );
}

Info.proTypes = {
  id: proTypes.number.isRequired,
  name: proTypes.string.isRequired,
  thumbnail: proTypes.string.isRequired,
};

export default Info;
