import React from 'react';

const getCategoryColor = (category) => {
  if (!category) return 'bg-gray-300';
  if (category.includes('alkali metal')) return 'bg-red-300';
  if (category.includes('alkaline earth metal')) return 'bg-yellow-400';
  if (category.includes('transition metal')) return 'bg-yellow-200';
  if (category.includes('noble gas')) return 'bg-purple-300';
  if (category.includes('halogen')) return 'bg-green-300';
  if (category.includes('metalloid')) return 'bg-blue-300';
  if (category.includes('nonmetal')) return 'bg-green-200';
  return 'bg-gray-200';
};

const ElementTile = ({ element, onClick }) => {
  return (
    <div
      className={`text-center p-2 border rounded cursor-pointer hover:scale-105 transition ${getCategoryColor(element.category)}`}
      style={{ gridColumnStart: element.xpos, gridRowStart: element.ypos }}
      onClick={onClick}
    >
      <div className="font-bold text-sm">{element.symbol}</div>
      <div className="text-xs">{element.name}</div>
      <div className="text-xs">{element.atomic_mass.toFixed(3)}</div>
    </div>
  );
};

export default ElementTile;
