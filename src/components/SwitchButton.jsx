import React, { useState } from "react";

const SwitchButton = ({ switchBtnState, setSwitchBtnState, btnTitle }) => {
  // const [isSwitchOn, setIsSwitchOn] = useState(false);
  const btnCaption = switchBtnState ? btnTitle + " Off" : btnTitle + " On";
  const btnPanelClasses =
    "inline-flex justify-start min-w-[70px] min-h-[25px] bg-gray-400 border border-black border-solid m-2 p-1 shadow-lg shadow-gray-900/50 ";
  const additionalClass = switchBtnState ? " justify-end" : " justify-start";
  const btnPanelFinalClasses = btnPanelClasses + additionalClass;

  const handleClick = () => {
    setSwitchBtnState(!switchBtnState);
  };

  return (
    <div
      onClick={handleClick}
      className="power-switch inline-flex  flex-col text-center m-4 "
    >
      <span className="select-none">{btnCaption}</span>
      <div className={btnPanelFinalClasses}>
        <span
          id="left"
          className="inline-block cursor-pointer select-none min-w-[30px] bg-gray-600 border border-black shadow-xl shadow-red-500 shadow-[inset_1px_1px_8px_rgba(255,255,255,0.7)] "
        >
          &nbsp;
        </span>
      </div>
    </div>
  );
};

export default SwitchButton;
