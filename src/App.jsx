import React, { useEffect, useState } from "react";
import DrumMachineKey from "./components/DrumMachineKey";
import DrumKeyAudioSource from "./assets/DrumKeysAudioSource";
import SwitchButton from "./components/SwitchButton";
import VolumeSlider from "./components/VolumeSlider";

const App = () => {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isBankOn, setIsBankOn] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.5);
  const [displayValue, setDisplayValue] = useState("");

  const drumMachineKeys = DrumKeyAudioSource.map((keyObj) => (
    <DrumMachineKey
      key={keyObj.key}
      isPowerOn={isPowerOn}
      keyObject={keyObj}
      handleDisplayState={setDisplayValue}
      audioVolume={audioVolume}
    />
  ));

  useEffect(() => {
    if (!isPowerOn) {
      setDisplayValue("");
    }
  }, [isPowerOn]);

  return (
    <div className="main-container bg-gray-600 min-w-dvw min-h-dvh flex items-center justify-center">
      <div
        id="drum-machine"
        className="container bg-gray-200 flex flex-wrap items-center justify-center max-w-[620px] m-8"
      >
        <div className="left-panel bg-gray-200 p-4 min-w-[400px] max-w-[400px]">
          <div className="grid grid-cols-3 gap-2 p-4">{drumMachineKeys}</div>
        </div>
        <div className="right-panel bg-gray-200 p-4 max-w-[200px]">
          <SwitchButton
            btnTitle="Power"
            switchBtnState={isPowerOn}
            setSwitchBtnState={setIsPowerOn}
          />
          <div>
            <span
              id="display"
              className="inline-block cursor-pointer mb-4 select-none min-w-[160px] min-h-[50px] leading-[48px] bg-gray-400 border border-black shadow-xl shadow-gray-500 text-center font-extrabold"
            >
              {displayValue}
            </span>
          </div>
          <VolumeSlider
            audioVolume={audioVolume}
            setAudioVolume={setAudioVolume}
          />
          <SwitchButton
            btnTitle="Bank"
            switchBtnState={isBankOn}
            setSwitchBtnState={setIsBankOn}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
