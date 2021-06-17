//import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Turn from './components/turn';
import React, { Component } from 'react';

class App extends Component {

  createBoard(){
    let board = [];
    for (var i = 0; i < 42; i++) {
      board.push("0");
    }
    return board;
  }

  state = {
    player: 1,
    board: this.createBoard(),
    play: false
  };

  findLowestIndex = index => {
    let column = index % 7;
    for (var i = 5; i >= 0; i--) {
      let currentIndex = (i*7) + column;

      if (this.state.board[currentIndex] === "0"){
        return currentIndex;
      }
 
    }
  }

  checkRow = (currentIndex) => {
    let minIndex = currentIndex - (currentIndex % 7); 
    let maxIndex = currentIndex + (6 - (currentIndex % 7));

    let count = 1;
    let won = false;

    for (var i=minIndex; i+1<=maxIndex; i++){
      if(this.state.board[i] === this.state.board[i+1] && this.state.board[i] !== "0"){
        count = count + 1;
        if(count === 4){
          won = true;
        }
      } else{ count = 1; }
    }

    if(won){
      this.setState({play: true});
    }

  }

  checkColumn = (currentIndex) => {
    let minIndex = currentIndex % 7;
    let maxIndex = (currentIndex % 7) + 35;

    let count = 1;
    let won = false;

    for (var i=minIndex; i+7<=maxIndex; i += 7){
      if(this.state.board[i] === this.state.board[i+7] && this.state.board[i] !== "0"){
        count = count + 1;
        if(count === 4){
          won = true;
        }
      } else{count = 1;}
    }

    if(won){
      this.setState({play: true});
    }
  }

  checkLeftDiagonal = (currentIndex) => {
    let xCoord = currentIndex % 7;
    let yCoord = (currentIndex - xCoord) / 7;

    let minIndex = 41;
    let count = 1;
    let won = false;

    if (xCoord >= yCoord){
      minIndex = currentIndex -  (yCoord * 8);
    }  else{
      minIndex = currentIndex - (xCoord * 8);
    }

    for (var i=minIndex; i+8<=41; i+=8){
      if(this.state.board[i] === this.state.board[i+8] && this.state.board[i] !== "0"){
        count = count + 1;
        if(count === 4){
          won = true;
        }
      } else{ count = 1; } 
    }

    if(won){
      this.setState({play: true});
    } 
  }

  checkRightDiagonal = (currentIndex) => {
    let xCoord = 6 - (currentIndex % 7);
    let yCoord = (currentIndex - (currentIndex % 7)) / 7;

    let minIndex = 41;
    let count = 1;
    let won = false;

    if (xCoord >= yCoord){
      minIndex = currentIndex -  (yCoord * 6);
    }  else{
      minIndex = currentIndex - (xCoord * 6);
    }

    for (var i=minIndex; i+6<=41; i+=6){
      if(this.state.board[i] === this.state.board[i+6] && this.state.board[i] !== "0"){
        count = count + 1;
        if(count === 4){
          won = true;
        }
      } else{ count = 1; }
    }

    if(won){
      this.setState({play: true});
    } 

  }

  updateBoard = index => {
    console.log("beginning player is " + this.state.player);
    let lowIndex = this.findLowestIndex(index);
    let newBoard = this.state.board;
    let newPlayer = 0;

    if (this.state.player === 1){
      newBoard[lowIndex] = "1";
      newPlayer = 2;
    } else {
      newBoard[lowIndex] = "2";
      newPlayer = 1;
    }

    this.setState({board: newBoard});
    this.checkRow(lowIndex);
    this.checkColumn(lowIndex);
    this.checkLeftDiagonal(lowIndex);
    this.checkRightDiagonal(lowIndex);
    if(this.state.play !== true){
      console.log("player is " + this.state.player);
      this.setState({player: newPlayer})
    }
  }

  handelReset = () => {
    this.setState({board: this.createBoard(), player: 1, play: false})
  }

  render() {
    return (
      <div className="App">
        <Turn player={this.state.player} play={this.state.play} handelReset={this.handelReset}/>
        <Board board={this.state.board} play={this.state.play} updateBoard={this.updateBoard}/>
      </div>
    );
  }
}

export default App;
