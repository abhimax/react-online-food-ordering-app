import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const BackDrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  // const backDrop = <div className={classes.backdrop}></div>;
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
