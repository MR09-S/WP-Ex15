import React from 'react';
import Child from './Child'; // Import the Child component

const Parent = () => {
  const msg = "Prop message from parent to child!";
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={msg} />
    </div>
  );
};

export default Parent;
