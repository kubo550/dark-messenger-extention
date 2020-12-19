import React, { FC } from "react";

interface bgUrlProps {
  bgUrl: string;
  setBgUrl: (key: "bgUrl", value: string) => void;
}

const BgUrl: FC<bgUrlProps> = ({ bgUrl, setBgUrl }) => (
  <div className='input-label'>
    <div className='inline'>
      <p>Image URL</p>
      <i
        className='fas fa-question-circle'
        title='Add URL to img or leave empty to display your primary color'
      ></i>
    </div>
    <div className='inline'>
      <input
        type='text'
        value={bgUrl}
        placeholder='https://image.png'
        onChange={({ target: { value } }) => setBgUrl("bgUrl", value)}
      />
    </div>
  </div>
);

export default BgUrl;
