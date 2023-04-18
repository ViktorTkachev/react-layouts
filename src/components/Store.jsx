import React, { useState } from 'react';
import IconSwitch from './IconSwitch';

const Store = ({ products }) => {
  const [selectedIcon, setSelectedFilteIcon] = useState('view_list');
  const [selectedClass, setSelectedClass] = useState('');
  return (
    <div className="container">
      <IconSwitch icon={selectedIcon} onSwitch={handleViewCards} />
      <CardsView classList={selectedClass} products={products} />
    </div>
  );
};

export default Store;
