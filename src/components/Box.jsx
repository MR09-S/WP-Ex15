import React, { useContext } from 'react';
import { ThemeCtx } from '../App'; // Adjust the import path based on your folder structure

const Box = () => {
  const t = useContext(ThemeCtx); // Using the context to get the theme value
  const style = {
    backgroundColor: t === 'dark' ? '#222' : '#eee',
    color: t === 'dark' ? '#fff' : '#000',
    padding: '20px',
    marginTop: '20px',
  };

  return (
    <div style={style}>
      <p>This is {t} mode</p>
    </div>
  );
};

export default Box;
