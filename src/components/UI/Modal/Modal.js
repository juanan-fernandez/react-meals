import styles from './Modal.module.css';

const Backdrop = ({ onCloseModal }) => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = () => {};

const Modal = ({ title = '', message, onCloseModal }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onCloseModal={onCloseModal} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay title={title} message={message} />,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default Modal;
