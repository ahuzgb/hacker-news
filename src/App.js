import { useEffect, useState } from "react";
import "./App.css";
import AllPosts from "./components/AllPosts";

function App() {
  const url =
    "https://gist.githubusercontent.com/MyElectricSheep/4f15c82c45409e06b220d4f7b67e1534/raw/106124f0632d8167001de62a12275dcbe660c2cd/hackernews.json";

  const [posts, setPosts] = useState([]);

  function fetchData() {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setPosts(data.hits))
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    fetchData();
    console.log(posts);
  }, []);

  return (
    <div className="App">
      <AllPosts posts={posts} />
    </div>
  );
}

export default App;
