import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

const Modal = (props) => {
  
  const isOpen = useSelector((store) => store.modal.isOpen);

  if (!isOpen) {
    return true;
  }
  
  return (
    <aside className="modal-container">
      {!props.message ? <div className="modal1">
        <h4>anda yakin ingin menghapusnya?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={props.handleConfirm}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={props.handleCancel}
          >
            cancel
          </button>
        </div>
      </div> : 
      <div>
      <h2>{props.message}</h2>
      </div>}     
    </aside>
  )
}

Modal.propTypes = {
  message: PropTypes.string,
  handleConfirm: PropTypes.func,
  handleCancel: PropTypes.func
}

export default Modal