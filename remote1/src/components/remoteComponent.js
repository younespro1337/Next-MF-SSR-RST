// src/components/RemoteComponent.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RemoteComponent = ({ inputValue, onInputChange, onButtonClick }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setValue(value);
    if (onInputChange) {
      onInputChange(value);
    } else {
      console.error('onInputChange is not defined');
    }
  };

  const inputStyle = {
    padding: '0.5rem',
    fontSize: '1rem',
    marginRight: '1rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  };

  return (
    <div>
      <h2>Change the Name of App Below:</h2>
      <input
        style={inputStyle}
        type="text"
        value={inputValue || ''}
        onChange={handleInputChange}
        maxLength={15}
      />
      <button style={buttonStyle} onClick={onButtonClick}>
        Dispatch Action
      </button>
      <p>Input Value: {value}</p>
    </div>
  );
};

RemoteComponent.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default RemoteComponent;
