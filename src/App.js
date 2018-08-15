import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.character to the character json array
  state = {
    score: 0,
    highScore: 0,
    message: "Click to begin",    
    characters: characters
    
  };

  checkHighScore(loss){

     if(this.state.score === 15){
      return this.state.score      
    }

    if(this.state.highScore === this.state.score){
      return this.state.score + 1;
    }

    return this.state.highScore;
  }

  checkWin(){
    // checks if you win
    if(this.state.score === this.state.characters.length - 1){
      alert("You win!");
      return true;  

    }
    return false;

  }

  handleClick = (item) => {
    console.log("This is our item in handleClick: ", item);
    let stateArray = this.state.characters.slice();

    console.log("This is our stateArray: ", stateArray);


    if(!item.clicked){
      for(let i = 0; i < stateArray.length; i++){
        if(stateArray[i].id === item.id){
          stateArray[i].clicked = true;
        }
      }

      if(!this.checkWin()){
        this.setState({
          score: this.state.score + 1,
          highScore: this.checkHighScore(),
          message: "You got a point!",
          characters: stateArray.sort(()=> Math.random() - 0.5)
        })
      }else {
        stateArray.map(character => character.clicked = false);

        this.setState({
          score: 0,
          highScore: this.checkHighScore(),
          message: "Congrats! You Won!! Want to play again?",
          characters: stateArray.sort(() => Math.random() - 0.5)
        })
      }



   

     
    }else {
      stateArray.map(character => character.clicked = false);

      this.setState({
        score: 0,
        highScore: this.checkHighScore(true) - 1,
        message: "You already clicked that one! Start over.",
        characters: stateArray
      })
    }
  

  }

  componentDidUpdate(){
    console.log("this is our state: ", this.state);
  }

  componentDidMount(){
    console.log(this.state.characters.length);
    console.log('component did mount state: ', this.state);
  }

  render() {
    return (
      <div>
      <Title>{this.state.message} Score: {this.state.score} High Score: {this.state.highScore}</Title>
      <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            clicked={character.clicked}
            handleClick={this.handleClick}
            />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;