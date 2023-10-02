import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import FrontPostItem from "../components/FrontPostItem";
import { PostModel } from "../components/Post";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const filterArticles = (posts: PostModel[] | null, searchText: string) => {
  if (!posts) {
    return [];
  }

  if (searchText.length === 0) {
    return posts;
  }

  return posts.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase());
  });
};

export default function HomeRoute() {
  const [searchText, setSearchText] = useState("");

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const foundArticles = filterArticles(posts, searchText);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/posts`);

        setPosts(response.data);

        setError(null);
      } catch (err) {
        setError((err as unknown as any).message);
        setPosts(null);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    
      <h2>Här kan man skriva ett blogginlägg</h2>
      <div className="search-box-wrapper">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="search-box"
          placeholder="Search ..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <div className="front-posts">
        {foundArticles.length === 0 && <div> Inga blogginlägg </div>}
        {foundArticles.map((item, index) => (
          <FrontPostItem key={index} post={item}></FrontPostItem>
        ))}
      </div>
      
    </>
  );
}
