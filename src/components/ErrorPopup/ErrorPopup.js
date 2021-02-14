import PropTypes from 'prop-types';
import s from './errorPopup.module.css';

function ErrorPopup({ text }) {
  return (
    <div className={s.popup}>
      <h1>{text}</h1>
    </div>
  );
}

ErrorPopup.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorPopup;
