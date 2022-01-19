import React from 'react';
import Header from './Header';

const Home = () => (
  <div>
    <Header />
    <section className="homeContainer">
      <h2 className="homeTitle">
        Welcome to the (number) jungle!
      </h2>
      <div className="homeTextContainer">
        <p className="homeText" style={{ color: 'aliceblue' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          doloremque dolores dolorum alias dignissimos fuga praesentium nemo
          quaerat molestiae expedita ut illo vel eveniet placeat, totam omnis sit
          maiores officia nam ea numquam. Possimus doloribus culpa, sit itaque
          quidem, modi minus voluptatem totam vero vitae voluptas a natus
          explicabo rem!
        </p>
        <p className="homeText" style={{ color: 'aliceblue' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          doloremque dolores dolorum alias dignissimos fuga praesentium nemo
          quaerat molestiae expedita ut illo vel eveniet placeat, totam omnis sit
          maiores officia nam ea numquam. Possimus doloribus culpa, sit itaque
          quidem, modi minus voluptatem totam vero vitae voluptas a natus
          explicabo rem!
        </p>
      </div>
    </section>
  </div>
);

export default Home;
