import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import styles from './modal.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  brands,
  solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';

const Modal = ({
  name,
  longDescription,
  url,
  deployedUrl,
  techs,
  style,
  font,
  onClose,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const modalWrapperRef = React.useRef();

  const backDropHandler = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener('click', backDropHandler);
    return () => {
      window.removeEventListener('click', backDropHandler);
    };
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const GameName = styled.span`
    font-family: ${font || 'cursive'};
  `;

  const modalContent = (
    <motion.div
      key="modal"
      className={`${styles.card}`}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <div className={styles.modalOverlay} data-game={style}>
        <div ref={modalWrapperRef} className={styles.modalWrapper}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div></div>
              <div className={styles.modalTitle}>
                <GameName className={style}>{name}</GameName>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, zIndex: 1000 }}
                whileTap={{ scale: 0.9 }}
                className={styles.x}
                onClick={handleCloseClick}
              >
                <FontAwesomeIcon icon={solid('xmark')} />
              </motion.button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.appInfoContainer}>
                <div className={styles.imageDescContainer}>
                  <div className={styles.screenshot}>
                    <img
                      className={styles.image}
                      src={`../../${style}.jpg`}
                    />
                  </div>
                  <div className={styles.descTechsContainer}>
                    <div className={styles.longDescription}>
                      {longDescription}
                    </div>
                    <div className={styles.techs}>{techs}</div>
                  </div>
                </div>

                <div className={styles.buttonContainer}>
                  <a href={url}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      className={`${styles.githubButton} ${styles.button}`}
                    >
                      <FontAwesomeIcon icon={brands('github')} />{' '}
                      GitHub{' '}
                    </motion.button>
                  </a>
                  {style == 'sproutsweeper' ||
                  style == 'boredgame' ? (
                    <a href={`${deployedUrl}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className={`${styles.deployedButton} ${styles.button}`}
                      >
                        <GameName>{name}</GameName>
                      </motion.button>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
