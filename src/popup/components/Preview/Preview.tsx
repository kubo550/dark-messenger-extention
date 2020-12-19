import React, { FC, MutableRefObject } from "react";
import { optionInterface } from "../../Popup";
import PreviewElement from "./PreviewElement/PreviewElement";

export type previewType = "Menu" | "Header" | "Info" | "Content" | "Input";

export interface previewProps {
  preview: MutableRefObject<any>;
  options: optionInterface;
}

const previeNames: previewType[] = ["Menu", "Header", "Info", "Content", "Input"];

const Preview: FC<previewProps> = ({ preview, options }) => (
  <div ref={preview} className='preview-container'>
    {previeNames.map(name => (
      <PreviewElement key={name} name={name} options={options} />
    ))}
  </div>
);

export default Preview;
