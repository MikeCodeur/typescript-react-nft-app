import React from 'react';
import logo from './logo.svg';
import './css/styles.css'
//import './App.css';

function App() {
  return (
    <div>
    <main className="container">
      <input type="text" className="input-search" />
      <div className="card-container">
      <section className="main-card">
          <div className="image-container">
            <img
              src="images/image-equilibrium.jpg"
              alt="nft"
              className="main-image"
            />
            <div className="overlay"></div>
            <img src="images/icon-view.svg" alt="view icon" className="view" />
          </div>
          <div className="text-container">
            <h1 className="title">Equilibrium #3429</h1>
            <p className="description">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="eth-info">
              <div className="info">
                <img
                  src="images/icon-ethereum.svg"
                  alt="ETH"
                  className="icon"
                /><span className="eth">0.065 ETH</span>
              </div>
              <div className="info">
                <img
                  src="images/icon-clock.svg"
                  alt="clock"
                  className="icon"
                /><span className="expire">3 days left</span>
              </div>
            </div>
            <div className="creator-info">
              <img
                src="images/image-avatar.png"
                alt="Jules Wyvern"
                className="avatar"
              />
              <p className="creator-text">
                Creation of <span className="creator-name">Jules Wyvern</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      
    </main>

    <footer className="attribution">
      Formation TypeScript
      <a href="https://www.mikecodeur.com" target="_blank">Mike Codeur</a>.
    </footer>
  </div>
  );
}

export default App;
