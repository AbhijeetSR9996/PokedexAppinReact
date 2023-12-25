import React, { useState } from "react";
import "./card.styles.css";
import Modal from "react-modal";

export const Card = ({ monster, buttonProp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="card-container" onClick={openModal}>
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h2>{monster.name}</h2>
        <p>{monster.id}</p>
        <p>{monster.username}</p>
        {/* {buttonProp && <button onClick={openModal}>{buttonProp}</button>} */}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Card Details"
      >
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h1>Stats: </h1>
        <p>ID: {monster.id}</p>
        <p>Name: {monster.name}</p>
        <p>Username: {monster.username}</p>
        <p>Phone: {monster.phone}</p>
        <p>Email: {monster.email}</p>
        <p>Website: {monster.website}</p>
        <button onClick={closeModal}>❌</button>
      </Modal>
    </>
  );
};
