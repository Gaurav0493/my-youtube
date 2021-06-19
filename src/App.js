import { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components";
import { VideoList } from "./components";
import youtube from "./api/youtube";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageToken, setPageToken] = useState("");
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if(pageToken){
        fetchVideos(searchTerm, pageToken);
    }
    setLoading(true);
  };

  const fetchVideos = async (termFromSearchBar, pageToken) => {
    const apiResponse = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
        pageToken: pageToken ? pageToken : ""
      },
    }).catch(error=>{
        console.log("Please add your api key")
    })
    setLoading(false);
    if(apiResponse && apiResponse.data && apiResponse.data.items){
        setVideos(apiResponse.data.items);
        apiResponse.data.nextPageToken && setPageToken(apiResponse.data.nextPageToken);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchVideos(searchTerm, pageToken);
  };

  return (
    <div className="App">
      <header className="brandname">My Youtube</header>
      <SearchBar
        label="Search youtube video"
        setSearchTerm={setSearchTerm}
        placeholder="Search here"
        handleSubmit={handleSubmit}
      />
      {videos && <VideoList videos={videos} />}
      {loading && "Loading please wait"}
    </div>
  );
}

export default App;
