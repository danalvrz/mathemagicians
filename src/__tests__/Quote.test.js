import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Quote from '../components/Quote';

describe('QuoteTesting', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Quote />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
