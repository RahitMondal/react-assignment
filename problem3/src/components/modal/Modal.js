import "./Modal.css";

const Modal = ({ imgSrc, closeBtnHandler }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeBtnHandler}>
          &times;
        </button>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default Modal;
