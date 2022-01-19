import React from 'react';
import renderer from 'react-test-renderer';
// eslint-disable-next-line no-unused-vars
import { render, fireEvent } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('Header', () => {
  const component = renderer.create(
    <Router>
      <Header />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
