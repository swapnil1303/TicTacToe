import React from 'react'

export default function Square(props) {
  return (
    <div className="Squares" style={{border:"1px solid white",height:"100%",width:"40%",display:'flex',justifyContent:'center',alignItems:'center'}} onClick={props.onClick}>
        <h5>{props.value}</h5>
    </div>
  )
}
