import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import styles from "./modal.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({
  show,
  onClose,
  children,
  title,
  longDescription,
  url,
  deployedUrl,
  name,
  imageName,
  openerIDs,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef();

  const backDropHandler = (e) => {
    if (
      !modalWrapperRef?.current?.contains(e.target)
    ) {
      console.log("backdrop handler! ", e.target, show);
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener("click", backDropHandler);
    return () => {
      window.removeEventListener("click", backDropHandler);
    }
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      <motion.div
        key="modal"
        className={`${styles.card}`}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <StyledModalOverlay>
          <StyledModalWrapper ref={modalWrapperRef}>
            <StyledModal>
              <StyledModalHeader>
                {name && <StyledModalTitle>{name}</StyledModalTitle>}
                <a href="#" onClick={handleCloseClick}>
                  x
                </a>
              </StyledModalHeader>

              <StyledModalBody>
                <div id={styles["app-info-container"]}>
                  <div id={styles["screenshot"]}></div>
                  <div id={styles["long-desription"]}>{longDescription}</div>
                  <div id={styles["button-container"]}>
                    <motion.button id={styles["github-button"]}></motion.button>
                    <motion.button
                      id={styles["deployed-button"]}
                    ></motion.button>
                  </div>
                </div>
              </StyledModalBody>
            </StyledModal>
          </StyledModalWrapper>
        </StyledModalOverlay>
      </motion.div>
    </AnimatePresence>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
  color: black;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  color: black;
  font-family: helvetica;
`;

const StyledModalWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const StyledModal = styled.div`
  background: lightgray;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 15px;
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledModalTitle = styled.div`
  color: black;
`;
export default Modal;
