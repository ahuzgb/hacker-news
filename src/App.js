import { useEffect, useState } from "react";
import "./App.css";
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const url = `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story`;

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
  }, [userInput]);

  return (
    <div className="App">
      <Navbar />
      <div className=" search-bar ">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <AllPosts posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
