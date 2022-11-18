import { useEffect, useState } from "react";
import "./App.css";
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const url = `http://hn.algolia.com/api/v1/search?query=${userInput}&tags=story`;
  const [isLoading, setIsLoading] = useState(true)
  

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
    setTimeout(() => {
      setIsLoading(true)
    fetchData();
    console.log(posts);
    setIsLoading(false)
  }, 3000)
  }, [userInput]);


  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userInput) {
      alert("Empty field!")
    } else {
      setUserInput("")
           
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="search-bar">
      {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <form
              onSubmit={handleSubmit}
            
            >
        <input
          placeholder="Search for something..."  
          required
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}

        />
        <button type="submit"
        style={{ cursor: "pointer", display: "inline-block"}}
        onClick={handleSubmit}>
          Search
        </button>
        
        </form>)}
      </div>
      <AllPosts posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
