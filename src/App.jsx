import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import cardStuff from "./images.json";
import { MDBContainer, MDBRow } from "mdbreact";

class App extends Component {
  state = {
    cardStuff,
    clickedCards: [],
    highScore: 0

  };

  clickedCard = id => {
    let currentIndex = this.state.cardStuff.length;
    let tempVal, randIndex;

    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempVal = this.state.cardStuff[currentIndex];
      this.state.cardStuff[currentIndex] = this.state.cardStuff[randIndex];
      this.state.cardStuff[randIndex] = tempVal;
    }

    const cardId = this.state.clickedCards.filter(cardId => cardId === id);

    let highScore = this.state.highScore;

    if (cardId.length === 0) {
      const newClickedCards = this.state.clickedCards.concat(id);
      if (newClickedCards.length > highScore) {
        highScore = newClickedCards.length;
      }
      this.setState({clickedCards: newClickedCards, highScore: highScore});
    } else {

      this.setState({clickedCards: []});
    }


  };


  render () {
    return (
      <body>
      <noscript>YOU NEED JAVASCRIPT ENABLED TO VIEW THIS.</noscript>
        <header>
          {/* <HeaderBar currentScore={this.state.clickedCards.length} highScore={this.state.highScore} /> */}
          <Jumbotron />
        </header>
        <main className="text-center">
          <MDBContainer>
              <p className="display-4">CURRENT SCORE={this.state.clickedCards.length} | HIGH SCORE={this.state.highScore} </p>
            <MDBRow>
            {this.state.cardStuff.map(card => (
              <Card id={card.id} image={card.image} clickedCard={this.clickedCard} key={card.id} />
            ))}
            </MDBRow>
          </MDBContainer>
        </main>
      </body>
    );
  }


}
export default App;
