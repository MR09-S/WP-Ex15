import React, { useState, createContext } from 'react';
import LifecycleDemo from './components/Lifecycledemo'; // Correct case matching
import Parent from './components/Parent';
import ChildWithPropTypes from './components/ChildWithPropTypes';
import CounterUseState from './components/CounterUseState';
import CounterUseReducer from './components/CounterUseReducer';
import JokeComp from './components/JokeComp';
import FocusInput from './components/FocusInput';
import Box from './components/Box';
import FormState from './components/FormState';
import FormRef from './components/FormRef';

// Create Theme Context
export const ThemeCtx = createContext();

const App = () => {
  const [t, setT] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setT(t === 'light' ? 'dark' : 'light'); // Toggle between light and dark theme
  };

  // Inline button styles
  const inlineStyle = {
    backgroundColor: 'blue',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    margin: '10px',
  };

  // Internal button styles (in <style> tag)
  const internalButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    margin: '10px',
  };

  return (
    <ThemeCtx.Provider value={t}>
      <div style={{ padding: '20px' }}>
        <button style={inlineStyle} onClick={toggleTheme}>Toggle Theme</button>

        {/* LifecycleDemo */}
        <div>
          <LifecycleDemo />
        </div>

        {/* Parent and Child */}
        <div>
          <Parent />
        </div>

        {/* Child with Prop Types */}
        <div>
          <ChildWithPropTypes />
        </div>

        {/* Counter with useState */}
        <div>
          <CounterUseState />
        </div>

        {/* Counter with useReducer */}
        <div>
          <CounterUseReducer />
        </div>

        {/* Joke Component */}
        <div>
          <JokeComp />
        </div>

        {/* Focus Input */}
        <div>
          <FocusInput />
        </div>

        {/* Box (Theme Context) */}
        <div>
          <Box />
        </div>

        {/* Form with useState */}
        <div>
          <FormState />
        </div>

        {/* Form with useRef */}
        <div>
          <FormRef />
        </div>

        {/* Example Buttons */}
        <div>
          <style>
            {`
              .internal-button {
                background-color: green;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                border: none;
                border-radius: 5px;
                margin: 10px;
              }
            `}
          </style>
          <button className="internal-button">Internal Styled Button</button>
        </div>
      </div>
    </ThemeCtx.Provider>
  );
};

export default App;
