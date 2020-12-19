import { optionType, optionInterface } from "../../Popup";

export { optionType, optionInterface }

export type optionValue = string | number;
export type colorInputType = "primary" | "secondary" | "textColor";
export type rangeInputType = "power" | "angle";

export enum colorEnum {
    primary = "primary",
    secondary = "secondary",
    textColor = "textColor"
}

export enum rangeEnum {
    power = "power",
    angle = "angle",
}

export interface inputProps {
    options: optionInterface;
    setCurrentOption: (key: optionType, val: optionValue) => void;
}

export interface bgUrlProps {
    bgUrl: string;
    setBgUrl: (key: "bgUrl", value: string) => void;
}

export interface colorInputProps {
    type: optionType;
    value: optionValue;
    setValue: (key: optionType, val: optionValue) => void;
}

export interface rageInputProps {
    type: rangeInputType;
    value: optionValue;
    setValue(type: rangeInputType, value: optionValue): void;
}