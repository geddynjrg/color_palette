import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { getContrast } from 'polished'; // Import the getContrast function from polished

const ColorContrastChecker = () => {
  const [color1, setColor1] = useState('#ffffff'); // Initial color
  const [color2, setColor2] = useState('#000000'); // Initial color

  const handleColorChange1 = (newColor) => {
    setColor1(newColor.hex);
  };

  const handleColorChange2 = (newColor) => {
    setColor2(newColor.hex);
  };

  const calculateContrast = () => {
    const contrastRatio = getContrast(color1, color2); // Use getContrast from polished
    return contrastRatio.toFixed(2); // Limit to two decimal places
  };

  return (
    <div className="color-contrast-checker">
      <div className="color-picker">
        <h2>Choose Colors</h2>
        <div className="color-pickers">
          <div className="color-picker-item">
            <h3>Color 1</h3>
            <SketchPicker color={color1} onChange={handleColorChange1} />
          </div>
          <div className="color-picker-item">
            <h3>Color 2</h3>
            <SketchPicker color={color2} onChange={handleColorChange2} />
          </div>
        </div>
      </div>
      <div className="contrast-result">
        <h2>Contrast Ratio</h2>
        <div className="contrast-value">
          <p>Contrast Ratio:</p>
          <p>{calculateContrast()}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorContrastChecker;
