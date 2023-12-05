import React, {useState} from 'react'
import Comments from './Comments'

const ListVideo = ({video}) => {

    const [clicked, setClicked]= useState(true);
    const [votesUp, setVotesUp] = useState(9210);
    const [votesDown, setVotesDown] = useState(185);

    function handleDownVotes() {
        setVotesDown(votesDown -1)
    }

    function handleUpvotes() {
        setVotesUp(votesUp +1)
    }


    function handleHideComments(){
        setClicked((clicked)=>!clicked)
    }
  return (    
   <div>
      <div className="video">
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />      
      </div>
      <div className='video details'>
        <h3>{video.title}</h3>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
        <button onClick={handleUpvotes}>{votesUp}</button>
        <button onClick={handleDownVotes}>{votesDown}</button>
        <br></br>
        <button onClick={handleHideComments}>{clicked ? "Hide Comments" : "Show Comments"}</button>
        <br></br>
        <></>
        {clicked && <Comments comments={video.comments}/>}
      </div>
    </div>
  )
}

export default ListVideo
