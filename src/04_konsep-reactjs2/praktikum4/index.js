import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

function NumberList(props) {
  const nim = props.nim;
  const listItems = nim.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const nim = [1, 7, 2, 2, 2, 3]; // <-- Ubah sesuai NIM Anda
ReactDOM.render(
  <NumberList nim={nim} />,
  document.getElementById('root')
);

const listItems = nim.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );

const listItems = nim.map((number, index) =>
    <li key={index.toString()}>
      {number}
    </li>
  );