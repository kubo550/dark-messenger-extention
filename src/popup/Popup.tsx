import React, { useEffect, useRef, useState } from "react";
import { Inputs, Preview } from "./components";
import "./Popup.scss";

import { optionValue } from "./components/Inputs/inputsTypes";

export interface optionInterface {
  primary: string;
  secondary: string;
  textColor: string;
  bgUrl: string;
  angle: number;
  power: number;
}

export type optionType =
  | "primary"
  | "secondary"
  | "textColor"
  | "bgUrl"
  | "angle"
  | "power";

const initialState: optionInterface = {
  primary: "#0d1b2a",
  secondary: "#a11d33",
  textColor: "#17c3b2",
  angle: 14,
  power: 20,
  bgUrl: "https://i.pinimg.com/originals/7f/ea/17/7fea175e13ba4a4b29672d15b2497367.jpg",
};

const Popup = () => {
  const [options, setOptions] = useState(initialState);
  const previewRef = useRef(null);

  useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true });
  }, [options]);

  const setCurrentOption = (key: optionType, val: optionValue) => {
    setOptions(prev => ({ ...prev, [key]: val }));
  };

  const handleSave = () => {
    chrome.runtime.sendMessage("hello from content");
    console.log("wyslano wiadoomsc");
  };

  return (
    <div className='app'>
      <Inputs options={options} setCurrentOption={setCurrentOption} />
      <Preview options={options} preview={previewRef} />
      <button onClick={handleSave}>click me</button>
    </div>
  );
};

export default Popup;
