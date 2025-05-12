import React, { useState } from 'react';
import data from './data/ptable.json';
import PeriodicTable from './components/PeriodicTable';
import ElementDetailModal from './components/ElementDetailModal';

const App = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center ">The Interactive Periodic Table of Elements</h1>
      <PeriodicTable elements={data.elements} onElementClick={setSelectedElement} />
      {selectedElement && (
        <ElementDetailModal element={selectedElement} onClose={() => setSelectedElement(null)} />
      )}
    </div>
  );
};

export default App;