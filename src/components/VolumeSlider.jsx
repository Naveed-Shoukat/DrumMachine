import React, { useEffect, useState } from "react";

const VolumeSlider = ({ audioVolume, setAudioVolume }) => {

  useEffect(() => {
  }, [audioVolume]);

  return (
    <div>
      <div className="volume-slider">
        <input
          className="styled-slider slider-progress" //range pr-6 accent-gray-500
          type="range"
          value={audioVolume}
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => setAudioVolume(e.target.value)}
        />
      </div>
    </div>
  );
};

export default VolumeSlider;

