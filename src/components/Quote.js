import React from 'react';
import Header from './Header';

const Quote = () => (
  <div>
    <Header />
    <section className="quotePage">
      <blockquote className="quote" style={{ color: 'aliceblue' }}>
        <span className="quoteText">&quot;Avoid negativity, use Math.abs().&quot;</span>
        {' '}
        <br />
        - Just another alge&apos;bro
      </blockquote>
    </section>
  </div>
);

export default Quote;
