import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import Calculator from '../components/Calculator';

describe('CalculatorTesting', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Calculator />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Buttons display correct value', () => {
    render(
      <Router>
        <Calculator />
      </Router>,
    );
    const currentButton = document.querySelectorAll('button')[5];
    const resultDisplay = document.getElementById('resultDisplay');
    fireEvent.click(currentButton);
    expect(resultDisplay.innerHTML).toBe('&nbsp;&nbsp;8');
  });
});
