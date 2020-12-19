import React, { FC } from "react";
import { previewType } from "../Preview";
import { optionInterface } from "../../../Popup";

interface previewElProps {
  name: previewType;
  options: optionInterface;
}

const PreviewElement: FC<previewElProps> = ({
  name,
  options: { primary, secondary, textColor, bgUrl, angle, power },
}) => {
  console.log({ primary, secondary, textColor, bgUrl, angle, power });

  const isReverse = name === "Header";
  const isImage = name === "Content";
  const isMenu = name === "Menu" || name === "Header";

  return (
    <div
      style={{
        backgroundColor: primary,
        backgroundImage: isImage
          ? `url(${bgUrl})`
          : `linear-gradient(${angle}deg, ${isReverse ? secondary : primary} ${power}%, ${
              isReverse ? primary : secondary
            } 74%)`,
        color: textColor,
        backgroundSize: "100% 100%",
      }}
      className={name}
    >
      {isMenu && "sample text"}
    </div>
  );
};
export default PreviewElement;
