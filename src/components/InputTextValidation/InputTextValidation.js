import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import * as styles from './InputTextValidation.module.css';
import { PropTypes } from 'prop-types';
import RowContainer from '../../containers/RowContainer/RowContainer';

const InputTextValidation = (props) => {
  // --------------- State --------------------
  const [text, setText] = useState('');

  return (
    <RowContainer>
      <label>
        <input
          className={styles['input-text']}
          type='text'
          placeholder={props.placeholder}
          onChange={(event) => {
            setText(event.target.value);
            return props.onInputChange;
          }}
          value={text}
        />
      </label>
      <button
        className={styles['validation-button']}
        onClick={() => {
          setText('');
          return props.onValidation(text);
        }}
      >
        <FaCheck color='green' />
      </button>
    </RowContainer>
  );
};

InputTextValidation.propTypes = {
  placeholder: PropTypes.string,
  onInputChange: PropTypes.func,
  onValidation: PropTypes.func.isRequired,
};

InputTextValidation.defaultProps = {
  placeholder: '',
  onInputChange: () => null,
};

export default InputTextValidation;
