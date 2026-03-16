// Simple client/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(json => setData(json.status))
      .catch(err => setData("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My MERN SaaS App</h1>
      <p>Backend Status: <strong>{data}</strong></p>
    </div>
  );
}

export default App;