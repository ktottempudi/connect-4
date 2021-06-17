import React, { Component } from 'react';
import '../stylesheet/turn.css';

class Turn extends Component{

	playerInfo = () => {
		if(this.props.play){
			return "Player " + this.previousPlayer() + " won";
		} else{
			return "Player " + this.props.player + " Turn";
		}
	}

	previousPlayer = () => {
		if(this.props.player === 1){
			return 2
		}
		else {return 1}
	}

	render(){

		return (

			<span className="container" >

				<button id="Restart" onClick={() => this.props.handelReset()}>Restart </button>

				<h3> {this.playerInfo()} </h3>


			</span>	

		);
	}
}

export default Turn;