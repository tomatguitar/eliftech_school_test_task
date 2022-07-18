import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
  const { children, buttonType, onButtonClick } = props;
  return (
    <button className={styles.button} type={buttonType || 'button'} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
