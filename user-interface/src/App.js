import React, { Component } from 'react';
import logo from './logo.svg';
import AvengerCard from "./components/AvengerCard";
import Wrapper from "./components/Wrapper"
import Result from "./components/Result"
import avengers from "./avengers.json"
import './App.css';

class App extends Component {
  
  state = {
    avengers
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar sticky-top navbar-light">
          <a className="navbar-brand">Avengers Click-ssemble</a>
          <div className="collapse navbar-collapse">
            <ul>
              <Result>
                {/* store results here */}
              </Result>
            </ul>
          </div>
        </nav>
        <header className="App-header header">
          <h1>Avengers Click-ssemble</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>        
        </header>
        <div className="container" id="image container">
          <Wrapper>
            {this.state.avengers.map(avenger => (
              <AvengerCard
                id={avenger.id}
                key={avenger.id}
                name={avenger.name}
                image={avenger.image}
              />
            ))}
          </Wrapper>
        </div>
        <hr class="my-4"></hr>
        <footer className="footer">
          <div className="bottom">
            "Avengers Click-ssemble"
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
