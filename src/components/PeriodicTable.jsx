import React from 'react';
import ElementTile from './ElementTile';

const PeriodicTable = ({ elements, onElementClick }) => {
  return (
    <div className="grid grid-cols-18 gap-1 auto-rows-auto">
      {elements.map((el) => (
        <ElementTile key={el.number} element={el} onClick={() => onElementClick(el)} />
      ))}
    </div>
  );
};

export default PeriodicTable;