import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import styles from './Modal.module.scss';

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  const { title, message, buttonClickHandler } = props;
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onButtonClick={buttonClickHandler}>Ok</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  const { title, message, onClose } = props;
  const buttonClickHandler = () => {
    onClose();
  };
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} buttonClickHandler={buttonClickHandler} />,
        document.getElementById('backdrop-root')
      )}
    </>
  );
};

export default Modal;
