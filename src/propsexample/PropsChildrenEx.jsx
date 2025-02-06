import React from 'react'

const PropsChildrenEx = (props) => {
  return (
    <div>PropsCHildrenEx
        <hr/>
        <h1>{props.username}</h1>
        <h1>{props.company}</h1>
        {
            props.children
        }
    </div>
  )
}

export default PropsChildrenEx
