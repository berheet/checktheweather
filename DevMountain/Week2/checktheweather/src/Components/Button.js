import React from 'react';

function button(props){
   return <button onClick={props.click}>{props.name}</button>
}

export default button;