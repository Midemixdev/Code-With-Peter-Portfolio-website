import { useSelector, useDispatch } from "react-redux";
import {
  handleSubmit,
  setEmail,
  setMessage,
  closeModal,
} from "../features/LogicSlice";

const Connect = () => {
  const dispatch = useDispatch();
  const { email, message, isOpen } = useSelector((state) => state.logic);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    dispatch(handleSubmit());
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleMessageChange = (e) => {
    dispatch(setMessage(e.target.value));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {isOpen && (
        <div>
          <div className="modal">
            <button className="btn--close-modal" onClick={handleClose}>
              &times;
            </button>
            <h2>Hello!</h2>
            <p>
              Share your project idea, <br /> and let's bring it to life.
            </p>

            <form className="modal__form" onSubmit={handleFormSubmit}>
              <input
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                name="user_email"
              />
              <textarea
                required
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Your message"
              />
              <button className="btn-sub">Submit</button>
            </form>
          </div>
          <div className="overlay" onClick={handleClose}></div>
        </div>
      )}
    </>
  );
};

export default Connect;
