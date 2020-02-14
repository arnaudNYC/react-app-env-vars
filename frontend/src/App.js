import React from 'react';

const { REACT_APP_GIT_HASH, REACT_APP_MY_ENV, NODE_ENV } = process.env;

const API_URL =
  NODE_ENV === 'production' ? window.API_URL : process.env.REACT_APP_API_URL;

function App() {
  return (
    <div>
      <ul>
        <li>My env: {REACT_APP_MY_ENV}</li>
        <li>Git Hash: {REACT_APP_GIT_HASH}</li>
        <li>API: {API_URL}</li>
      </ul>
    </div>
  );
}

export default App;
