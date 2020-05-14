import React, { Component } from "react";
import flowers from "./cards.json";
import Score from "./components/Score";
import Card from "./components/Card";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    flowers,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedFlowers: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a let to be updated
    let clickedFlowers = this.state.clickedFlowers;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed Flowers
    if (clickedFlowers.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      clickedFlowers.push(id);
      console.log(clickedFlowers);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedFlowers: []
      });
    } else {
       // alert player loss
      this.setState({
        score: 0,
        clickedFlowers: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ flowers: shuffle(flowers) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          You clicked on this already, try again...
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Yay, you haven't clicked on duplicates!
          </div>
        <Score
          title="Flowers Memory Game"
          topScore={this.state.topScore}
          score={this.state.score}
          
        />
        <div className="columns is-multiline is-centered">
          {this.state.flowers.map(flowers => (
            <Card
              key={flowers.id}
              id={flowers.id}
              image={flowers.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;