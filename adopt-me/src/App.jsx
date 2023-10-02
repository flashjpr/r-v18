import React from 'react';
import { createRoot } from 'react-dom';
const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Rhea',
      animal: 'Dog',
      breed: 'Rottweiler',
    }),
    React.createElement(Pet, {
      name: 'Kiri',
      animal: 'Bird',
      breed: 'Parrot',
    }),
    React.createElement(Pet, {
      name: 'Thor',
      animal: 'Dog',
      breed: 'Rottweiler',
    }),
  ]);
};
const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
