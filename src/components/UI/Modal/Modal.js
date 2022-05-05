import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onBackdropClick }) => {
	return <div className={styles.backdrop} onClick={onBackdropClick}></div>;
};

const ModalOverlay = ({ children }) => {
	return <div className={styles.modal}>{children}</div>;
};

const Modal = ({ children, onModalClick }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onBackdropClick={onModalClick} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
