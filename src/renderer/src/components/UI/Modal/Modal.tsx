import { MouseEvent, PropsWithChildren } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  width?: number;
  height?: number;
  setIsOpen: (isOpen: boolean) => void;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { children, width = 500, height = 500, setIsOpen } = props;

  const toggleModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className={styles.modal} onClick={toggleModal}>
      <div className={styles.modalBox} style={{ width, height }}>
        <button className={styles.modalExitButton} onClick={toggleModal}>
          X
        </button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
