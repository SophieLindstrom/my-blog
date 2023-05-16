import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import FrontPostItem from "../components/FrontPostItem";
import { PostModel } from "../components/Post";
import { posts } from "../data/posts";
import SearchIcon from "@mui/icons-material/Search";

const filterArticles = (posts: PostModel[], searchText: string) => {
  if (searchText.length === 0) {
    return posts;
  }

  return posts.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase());
  });
};

export default function HomeRoute() {
  const [searchText, setSearchText] = useState("");
  const foundArticles = filterArticles(posts, searchText);

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
