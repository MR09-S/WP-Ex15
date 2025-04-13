import React, { useRef, useState } from 'react';

const FormRef = () => {
  const nRef = useRef();
  const eRef = useRef();
  const [out, setOut] = useState({ n: '', e: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOut({
      n: nRef.current.value,
      e: eRef.current.value
    });
  };

  return (
    <div>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nRef} />
        <br />
        <input type="email" placeholder="Email" ref={eRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Name: {out.n}</p>
      <p>Email: {out.e}</p>
    </div>
  );
};

export default FormRef;
