import React from "react";
import Modal from "react-modal";
import "../../styles/modals/modalsError.css";
import { VscError } from "react-icons/vsc";

Modal.setAppElement("#root");

const ModalError = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Error"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="header-modal">
        <VscError className="icon-modal" />
      </div>
      <div className="body-modal">
        <h2>Ooops!</h2>
        <p>{message}</p>
        <button className="button-modal" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </Modal>
  );
};

export default ModalError;
