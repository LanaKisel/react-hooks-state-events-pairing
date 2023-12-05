import React from 'react'
import Comment from './Comment'

const Comments = ({comments}) => {
    const displayComments = comments
    .map(comment=> <Comment key={comment.id} name={comment.user} comment={comment.comment} />) 
  return (
    <div>
        {displayComments}
    </div>
  )
}

export default Comments
