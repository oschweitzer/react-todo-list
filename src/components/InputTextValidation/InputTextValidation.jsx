import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import * as styles from './InputTextValidation.module.css';
import { PropTypes } from 'prop-types';
import RowContainer from '../../containers/RowContainer/RowContainer';
import IconButton from '../IconButton/IconButton';

const InputTextValidation = (props) => {
  // --------------- State --------------------
  const [text, setText] = useState('');

  // --------------- Handlers --------------------
  const onValidation = () => {
    setText('');
    return props.onValidation(text);
  };

  const onValidationKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 13) {
      return onValidation();
    }
  };

  // --------------- Rendering --------------------
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
          onKeyPress={onValidationKeyPress}
          value={text}
        />
      </label>
      <IconButton onClick={onValidation}>
        <FaCheck color='green' />
      </IconButton>
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
