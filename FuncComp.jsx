import React from "react";

function FuncComp(props) {
    console.log(props)
    let className= props.apply ? 'heading' : '';
    let inline={
        color:'red',
        fontsize:'200px'
    }
    return(
        <div>
            <h1 style={inline}>Welcome to MRU {props.city} {props.children}</h1>
        </div>
    )
}
