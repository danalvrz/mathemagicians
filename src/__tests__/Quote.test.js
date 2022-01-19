import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line no-unused-vars
import { render, fireEvent } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Quote from '../components/Quote';

test('renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <Quote />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
