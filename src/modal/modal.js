import React from "react";
import { ModalContainer } from "../styles/modal";

const Modal = props => {
  const { handleClose, show, children } = props;

  return (
    <>
      {show ? (
        <div
          style={{
            backgroundColor: "rgba(0,0,0, 0.85)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh"
          }}
        />
      ) : null}
      <ModalContainer display={`${show ? "block" : "none"}`}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </ModalContainer>
    </>
  );
};

export default Modal;
