import React from 'react'
import Square from './Square'
import { useState } from 'react'
export default function Board(props) {
    const [state,setState]=useState(Array(9).fill(null));
    // console.log("state",state);
    const handleClick=()=>{
        console.log("Play Again");
        const temp=Array(9).fill(null);
        setState(temp);
    }
    const [isXturn,setTurn]=useState(true);
    const handleOnClick=(index)=>{
        const copyState=[...state];
        copyState[index]=isXturn?"X":"O";
        setState(copyState);
        setTurn(!isXturn);
    }
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a]!==null&&state[b]!=null&&state[c]!=null&&state[a]===state[b]&&state[b]===state[c]) return state[a];
        }
        return false;
    };
    const isWinner=checkWinner();
  return (
    <>
        <div className="board-container">
            {isWinner?(<> {isWinner} won the Tic Tac Toe<br/>
                <button onClick={handleClick} type="button" className="btn btn-primary" style={{width:"100%",marginTop:"20px"}}>Play Again</button>
            </>)
            :
            (<>
                <h4>Player {isXturn ? "X" : "O"} please move</h4>
                <div className="rows">
                <Square onClick={()=>handleOnClick(0)} value={state[0]}  />
                <Square onClick={()=>handleOnClick(1)} value={state[1]}/>
                <Square onClick={()=>handleOnClick(2)} value={state[2]}/>
            </div>
            <div className="rows">
                <Square onClick={()=>handleOnClick(3)}  value={state[3]}/>
                <Square onClick={()=>handleOnClick(4)} value={state[4]}/>
                <Square onClick={()=>handleOnClick(5)} value={state[5]}/>
            </div>
            <div className="rows">
                <Square onClick={()=>handleOnClick(6)} value={state[6]}/>
                <Square onClick={()=>handleOnClick(7)} value={state[7]}/>
                <Square onClick={()=>handleOnClick(8)} value={state[8]}/>
            </div>
            <button onClick={handleClick} type="button" className="btn btn-primary" style={{width:"100%",marginTop:"20px"}}>Reset Game</button>
            </>
            )
        }
            
        
        
        {/* <button type="button" className="btn btn-dark" style="width: 70%;margin-top: 30px;background-color: blueviolet;" onClick={handleClick}>Play Again</button> */}
        {/* <button onClick={handleClick}>Play Again</button> */}
        </div>
    </>
  )
}
