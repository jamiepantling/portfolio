import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import styles from "./modal.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

// const Modal = ({
//   onClose,
//   children,
//   longDescription,
//   url,
//   deployedUrl,
//   name,
//   techs,
//   style,
//   font
// }) => {
  
//   console.log(font)
//   const [isBrowser, setIsBrowser] = useState(false);

//   const modalWrapperRef = React.useRef();

//   const backDropHandler = (e) => {
//     if (!modalWrapperRef?.current?.contains(e.target)) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     setIsBrowser(true);
//     window.addEventListener("click", backDropHandler);
//     return () => {
//       window.removeEventListener("click", backDropHandler);
//     };
//   }, []);

//   const handleCloseClick = (e) => {
//     e.preventDefault();
//     onClose();
//   };

//   const modalContent = (
//     <AnimatePresence>
//       <motion.div
//         key="modal"
//         className={`${styles.card}`}
//         layout
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.95 }}
//         exit={{ opacity: 0 }}
//         transition={{
//           duration: 0.6,
//           delay: 0.1,
//           ease: [0, 0.71, 0.2, 1.01],
//         }}
//       >
//         <div className={styles.modalOverlay}>
//           <div ref={modalWrapperRef} className={styles.modalWrapper}>
//             <div className={styles.modal}>
//               <div className={styles.modalHeader}>
//                 <div></div>
//                 <div className={styles.modalTitle}>
//                   <GameName className={style}>{name}</GameName>
//                 </div>
//                 <motion.button 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={styles.x} onClick={handleCloseClick}>
//                   x
//                 </motion.button>
//               </div>

//               <div className={styles.modalBody}>
//                 <div className={styles.appInfoContainer}>
//                   <div className={styles.imageDescContainer}>
//                     <div className={styles.screenshot}>
//                       <img
//                         className={styles.image}
//                         src={`../../${style}.png`}
//                       />
//                     </div>
//                     <div className={styles.descTechsContainer}>
//                       <div className={styles.longDescription}>
//                         {longDescription}
//                       </div>
//                       <div className={styles.techs}>{techs}</div>
//                     </div>
//                   </div>

//                   <div className={styles.buttonContainer}>
//                     <a href={url}>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.9 }}
//                         className={`${styles.githubButton} ${styles.button}`}
//                       >
//                         <FontAwesomeIcon icon={brands("github")} /> GitHub                </motion.button>
//                     </a>
//                     <a href={deployedUrl}>
//                       <motion.button 
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.9 }}
//                       className={`${styles.deployedButton} ${styles.button}`}>
//                         {name}
//                       </motion.button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );

//   if (isBrowser) {
//     return ReactDOM.createPortal(
//       modalContent,
//       document.getElementById("modal-root")
//     );
//   } else {
//     return null;
//   }

// };

const Modal = (props) => {
  
  console.log(props.font)
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef();

  const backDropHandler = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener("click", backDropHandler);
    return () => {
      window.removeEventListener("click", backDropHandler);
    };
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    props.onClose();
  };
  const GameName = styled.span`
    font-family: ${props.font || "cursive"}`

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
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={styles.modalOverlay}>
          <div ref={modalWrapperRef} className={styles.modalWrapper}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <div></div>
                <div className={styles.modalTitle}>
                  <GameName className={props.style}>{props.name}</GameName>
                </div>
                <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={styles.x} onClick={handleCloseClick}>
                  x
                </motion.button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.appInfoContainer}>
                  <div className={styles.imageDescContainer}>
                    <div className={styles.screenshot}>
                      <img
                        className={styles.image}
                        src={`../../${props.style}.png`}
                      />
                    </div>
                    <div className={styles.descTechsContainer}>
                      <div className={styles.longDescription}>
                        {props.longDescription}
                      </div>
                      <div className={styles.techs}>{props.techs}</div>
                    </div>
                  </div>

                  <div className={styles.buttonContainer}>
                    <a href={props.url}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className={`${styles.githubButton} ${styles.button}`}
                      >
                        <FontAwesomeIcon icon={brands("github")} /> GitHub                </motion.button>
                    </a>
                    <a href={props.deployedUrl}>
                      <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      className={`${styles.deployedButton} ${styles.button}`}>
                        {props.name}
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

const GameName = styled.span`
font-family: cursive`

export default Modal;
