import React, { FC } from "react";
import ColorInput from "./ColorInputs/ColorInput";
import BgUrl from "./BgUrl/BgUrl";
import RangeInput from "./RangeInputs/RangeInput";

import {
  colorInputType,
  rangeInputType,
  rangeEnum,
  colorEnum,
  inputProps,
} from "./inputsTypes";

const Inputs: FC<inputProps> = ({ options, setCurrentOption }) => {
  const colorTypes: colorInputType[] = [
    colorEnum.primary,
    colorEnum.secondary,
    colorEnum.textColor,
  ];
  const rangeTypes: rangeInputType[] = [rangeEnum.angle, rangeEnum.power];

  return (
    <div className='inputs'>
      {colorTypes.map(type => (
        <ColorInput
          key={type}
          type={type}
          value={options[type]}
          setValue={setCurrentOption}
        />
      ))}
      <BgUrl bgUrl={options.bgUrl} setBgUrl={setCurrentOption} />
      {rangeTypes.map(type => (
        <RangeInput
          key={type}
          type={type}
          value={options[type]}
          setValue={setCurrentOption}
        />
      ))}
    </div>
  );
};

export default Inputs;
