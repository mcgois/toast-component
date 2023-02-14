import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
