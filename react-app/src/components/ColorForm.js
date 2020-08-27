import React from 'react';

import { useForm } from '../hooks/useForm';

export const ColorForm = (props) => {

  const [
    colorForm,
    change,
    resetColorForm,
  ] = useForm({ name: '', hexcode: '' });

  const submitColor = () => {
    props.onSubmitColor(colorForm);
    resetColorForm();
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