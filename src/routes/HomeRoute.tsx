import Post, { PostModel } from "../components/Post";
import { posts } from "../data/posts";

export default function HomeRoute() {
  return (
    <>
      <h2>Blogginlägg</h2>
      <div>
        {posts.map((item, index) => (
          <Post key={index} post={item}></Post>
        ))}
      </div>
    </>
  );
}
