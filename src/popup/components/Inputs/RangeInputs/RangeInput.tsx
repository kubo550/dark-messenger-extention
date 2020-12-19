import React, { FC } from "react";
import { rangeEnum, rageInputProps } from "../inputsTypes";

const RangeInput: FC<rageInputProps> = ({ type, value, setValue }) => {
  return (
    <div className='input-label'>
      <div className='inline'>
        <p>{type}</p>
        <input
          type='range'
          min='0'
          max={type === rangeEnum.power ? "100" : "360"}
          defaultValue={value}
          onChange={({ target: { value } }) => setValue(type, value)}
        />
      </div>
      <span className='text-center'>
        {value} {type === rangeEnum.power ? "%" : "deg"}
      </span>
    </div>
  );
};

export default RangeInput;
