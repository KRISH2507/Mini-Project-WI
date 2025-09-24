// frontend/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error fetching from backend:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Express + Postgres App</h1>
      <p>{message ? message : 'Loading...'}</p>
    </div>
  );
}

export default App;
