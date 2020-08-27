import React from 'react';

import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, addColor ] = useList(props.colors.concat());

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
      <ColorForm
        onSubmitColor={addColor}
        buttonText="Add Color" />
    </>
  );

};