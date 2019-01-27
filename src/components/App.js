import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async term => {
    //console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
        type: "video"
      }
    });
    this.setState({ videos: response.data.items });
  };
  onVideoSelected(video) {
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={this.onVideoSelected}
        />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
