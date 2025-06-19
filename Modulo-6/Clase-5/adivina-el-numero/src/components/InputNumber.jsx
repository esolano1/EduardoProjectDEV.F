import React from 'react';

const InputNumber = ({ value, onChange, disabled }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder="Escribe un número del 1 al 100"
    />
  );
};

export default InputNumber;
