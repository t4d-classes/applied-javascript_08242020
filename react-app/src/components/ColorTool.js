import React, { useState } from 'react';

export const ColorTool = (props) => {

  // props.colors.push({ id: 5, name: 'teal' });
  // props.newProp = 'test';
  // props.colors = [];
  // console.log(Object.isFrozen(props));

  const [
    colorForm /* state data */,
    setColorForm /* update the data, and re-render */
  ] = useState({ name: '', hexcode: '' } /* initial state */);

  const change = (e) => {

    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.value,
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1 className="page-header">Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color =>
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
      </form>
    </>
  );

};