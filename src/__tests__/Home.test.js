import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

describe('HomeTesting', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Home />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
