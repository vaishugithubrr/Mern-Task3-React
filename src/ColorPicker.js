import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className='container'>
      <h1>Color Picker</h1>
      <div
        className='container1'
        style={{ backgroundColor: selectedColor || '#ffc0cb' }}
      > <button onClick={handleButtonClick}>Pick a color</button>
        {showColorList && (
          <div style={{ display: 'flex', marginTop: '15px', marginLeft: '6px', marginBottom: '25px' }}>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: color,
                  margin: '0 5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <p style={{ marginTop: '10px', color: 'white', fontWeight: 'lighter', fontSize: '25px'}}>Selected Color: {selectedColor}</p>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;

// echo "# Mern-ReactJS3" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/SravyaSattisetti777/Mern-ReactJS3.git
// git push -u origin main