import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary Button UI component for user interaction
 */
export const Button = ({ primary, disabled, label, analytictag, type, ...props }) => {
  const mode = disabled ? 'disabled' : null;
  return (
    <button
      type="button"
      className={[`qm-button`, `qm-button--${type}`, mode].join(' ')}
      data-analytictag={analytictag}
      disabled={mode}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Is this button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * For analytic frameworks, how to uniquely identify this object
   */
  analytictag: PropTypes.string,

  /**
   * Type of button
   */
  type: PropTypes.oneOf(['default', 'primary-action', 'risky']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  analytictag: null,
  disabled: false,
  primary: false,
  onClick: undefined,
  type: 'default'
};
