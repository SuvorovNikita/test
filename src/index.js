import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

let vacancy = document.querySelector('.vacancy');
let name = document.querySelector('.name');

vacancy.addEventListener('click', function () {
  vacancy.hidden = true;
});

name.addEventListener('click', function () {
  name.hidden = true;
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    name.remove();
    vacancy.remove();
  }
});
