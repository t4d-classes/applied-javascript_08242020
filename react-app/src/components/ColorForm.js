import React, { useState } from 'react';

export const ColorForm = (props) => {

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

  const submitColor = () => {

    props.onSubmitColor(colorForm);

    setColorForm({
      name: '', hexcode: '',
    });
  };

  return (
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
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );

};