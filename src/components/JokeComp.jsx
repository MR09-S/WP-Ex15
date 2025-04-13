import React, { useEffect, useState } from 'react';

const JokeComp = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        setJoke(data.setup + ' - ' + data.punchline);
      })
      .catch(() => {
        setJoke('Error fetching joke.');
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default JokeComp;
