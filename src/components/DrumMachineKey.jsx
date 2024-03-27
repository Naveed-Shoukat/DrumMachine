import React, { useEffect } from "react";

const DrumMachineKey = ({
  keyObject,
  isPowerOn,
  handleDisplayState,
  audioVolume,
}) => {
  useEffect(() => {
    const handelKeyDownEvent = (evet) => {
      if (evet.key.toUpperCase() === keyObject.key) {
        handleClick();
      }
    };

    window.addEventListener("keydown", handelKeyDownEvent);

    return () => {
      window.removeEventListener("keydown", handelKeyDownEvent);
    };
  }, [isPowerOn, audioVolume]);

  const handleClick = () => {
    if (isPowerOn) {
      const keyPaidAudio = document.getElementById(keyObject.key);
      handleDisplayState(keyObject.keyTitle);
      keyPaidAudio.volume = audioVolume;
      keyPaidAudio.play();
    } else {
      alert("Please click Power On Button to play Drum MAchine");
    }
  };
  return (
    <div
      id="btn"
      onClick={handleClick}
      className="
            drum-pad
            bg-gray-400 
            cursor-pointer
            min-w-[100px] min-h-[80px]
            max-w-[100px] max-h-[80px]
            hover:bg-gray-600
            text-center
             
            text-white text-4xl 
            pt-[18px]
            border-2
            rounded-xl
            border-zinc-950  
            box-border"
    >
      {keyObject.key}
      <audio
        id={keyObject.key}
        className="clip"
        src={keyObject.audioSource}
      ></audio>
    </div>
  );
};

export default DrumMachineKey;
