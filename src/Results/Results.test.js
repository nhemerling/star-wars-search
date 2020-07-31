import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';
import renderer from 'react-test-renderer';

describe('Results component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Results />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected with empty results array', () => {
    const tree = renderer
      .create(<Results
                results={[]} type="people" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected with empty results array and type set as vehicles', () => {
    const tree = renderer
      .create(<Results
                results={[]} type="vehicles" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected with no props', () => {
    const tree = renderer
      .create(<Results />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
