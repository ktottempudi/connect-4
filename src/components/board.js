import React, { Component } from 'react';
import Cell from './cell';
import '../stylesheet/board.css'
// Board has 7 columns and 6 rows.
class Board extends Component{

	render(){

		return (
			<div className="boardContainer">
				{this.props.board.map((e, index) => {
					return <Cell key={index} index = {index} player={e} play={this.props.play} 
							updateBoard={this.props.updateBoard}></Cell>
				})}
			</div>
		);
	}

}
export default Board;