import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('HeaderTesting', () => {
  it('Header snapshot', () => {
    const component = renderer.create(
      <Router>
        <Header />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home link', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    expect(document.querySelectorAll('a')[0].getAttribute('href')).toBe('#/');
  });

  it('Cowculator link', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    expect(document.querySelectorAll('a')[1].getAttribute('href')).toBe('#/calculator');
  });

  it('Quote link', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    expect(document.querySelectorAll('a')[2].getAttribute('href')).toBe('#/quote');
  });
});
