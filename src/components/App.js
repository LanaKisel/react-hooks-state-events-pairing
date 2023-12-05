import video from "../data/video.js";
import ListVideo from "./ListVideo.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <ListVideo video={video}/>
    </div>
  );
}

export default App;
