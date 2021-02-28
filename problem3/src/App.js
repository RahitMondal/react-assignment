import { useState } from "react";
import "./App.css";

import Card from "./components/card/Card";
import Modal from "./components/modal/Modal";

import data from "./data/imageData.json";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  const imgClickHandler = (evt) => {
    setModalImgSrc(evt.target.src);
    setShowModal(true);
  };

  const closeBtnHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="app">
      <h2>Photographer's Showcase</h2>
      <div className="gallery">
        {data.map((curElm, index) => {
          return (
            <Card
              key={index}
              imgName={curElm.name}
              photographerName={curElm.photgrapher}
              imgClickHandler={imgClickHandler}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal imgSrc={modalImgSrc} closeBtnHandler={closeBtnHandler} />
      )}
    </div>
  );
}

export default App;
