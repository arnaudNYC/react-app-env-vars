import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

console.log('Git Hash', process.env.REACT_APP_GIT_HASH);

ReactDOM.render(<App />, document.getElementById('root'));
