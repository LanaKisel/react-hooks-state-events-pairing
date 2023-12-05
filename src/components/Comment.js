import React from 'react'

const Comment = ({name, comment}) => {
  return (
    <div>
        <h3>2 Comments</h3>
        <h1>{name}</h1>
        <p>{comment}</p>      
    </div>
  )
}

export default Comment
