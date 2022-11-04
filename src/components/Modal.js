import styles from "./Modal.module.css";

const Modal = ({ title, children, handleModal }) => {
  return (
    <div className={styles.main_modal}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <p>{title}</p>
          <button onClick={handleModal}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
