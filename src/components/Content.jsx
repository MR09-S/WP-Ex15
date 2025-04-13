import React, { useState } from 'react';

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "I asked my dog what’s two minus two. He said nothing.",
  "Why did the math book look sad? Because it had too many problems."
];

const Content = () => {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(random);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <button onClick={getJoke} style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>
        Tell me a joke
      </button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;
