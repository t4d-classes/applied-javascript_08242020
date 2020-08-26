import React, { useState } from 'react';

export const ColorTool = (props) => {

  const [
    colorForm /* state data */,
    setColorForm /* update the data, and re-render */
  ] = useState({ name: '', hexcode: '' } /* initial state */);

  const [ colors, setColors ] = useState(props.colors.concat());

  const change = (e) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  const addColor = () => {

    setColors(colors.concat({
      ...colorForm,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

    setColorForm({
      name: '', hexcode: '',
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1 className="page-header">Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'color-name-input' }, 'Color Name:') */}
          <label htmlFor="color-name-input">Color Name:</label>
          <input type="text" id="color-name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          {/* React.createElement('label', { htmlFor: 'color-name-input' }, 'Color Name:') */}
          <label htmlFor="color-hexcode-input">Color Hexcode:</label>
          <input type="text" id="color-hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};