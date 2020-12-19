import React, { FC } from "react";
import { optionType, optionValue } from "../inputsTypes";

interface colorInputProps {
  type: optionType;
  value: optionValue;
  setValue: (key: optionType, val: optionValue) => void;
}

const ColorInput: FC<colorInputProps> = ({ type, value, setValue }) => (
  <div className='input-label'>
    <div className='inline'>
      <p>{type} Color</p>
      <input
        type='color'
        value={value}
        onChange={({ target: { value } }) => setValue(type, value)}
      />
    </div>
    <div className='inline'>
      <input type='text' placeholder='#000000' value={value} readOnly />
    </div>
  </div>
);

export default ColorInput;
