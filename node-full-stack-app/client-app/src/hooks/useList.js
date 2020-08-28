import { useState } from 'react';

export const useList = (initialList) => {

  const [ list, setList ] = useState(initialList);

  const appendItem = (item) => {
    setList(list.concat({
      ...item,
      id: Math.max(...list.map(c => c.id), 0) + 1,
    }));
  };

  const replaceItem = item => {
    const itemIndex = list.findIndex(i => i.id === item.id);
    if (!itemIndex === -1) {
      throw new Error('unable to find item with id ' + item.id);
    }
    const newList = list.concat();
    newList[itemIndex] = item;
    setList(newList);
  }

  const deleteItem = (itemId) => {
    setList(list.filter(c => c.id !== itemId));
  };

  return [ list, appendItem, replaceItem, deleteItem ];

};