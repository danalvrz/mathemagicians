import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line no-unused-vars
import { render, fireEvent } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Calculator from '../components/Calculator';

test('renders correctly', () => {
  const tree = renderer.create(
    <Router>
      <Calculator />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
