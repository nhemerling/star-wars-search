import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSearch from './CharacterSearch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
