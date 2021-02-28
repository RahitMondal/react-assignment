import "./Card.css";

const Card = ({ imgName, photographerName, imgClickHandler }) => {
  return (
    <div className="card">
      <div className="image-box">
        <img
          src={`./assets/images/${imgName}`}
          alt={imgName}
          onClick={imgClickHandler}
        />
      </div>
      <div className="photographer-name">
        <span>Image by: {photographerName}</span>
      </div>
    </div>
  );
};

export default Card;
