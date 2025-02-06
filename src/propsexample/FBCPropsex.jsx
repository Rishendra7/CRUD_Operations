import React from 'react'

const FBCPropsex = (props) => {
    console.log(props);
    // eslint-disable-next-line eqeqeq
    if(props.isLoggedIn == true){
        return (
            <div>
                <h1>{props.username}</h1>
                <h2>Hobbies:</h2>
                {
                    props.hobbies.map((value)=>{
                        return <li>{value}</li>
                    })
                }
            </div>
        )
    }else{
        return <h1>Please Login first</h1>
    }
}

export default FBCPropsex
