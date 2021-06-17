import React, { Component } from 'react';
import '../stylesheet/cell.css';

class Cell extends Component{

	handelClick = index => {
		if (this.props.play !== true){
			this.props.updateBoard(index);
		}
	}

	render(){

		return(
			<button className="cell" onClick={() => this.handelClick(this.props.index)} data-player={this.props.player}></button>
		);
	}
}

export default Cell;