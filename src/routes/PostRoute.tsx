import { Link, useParams } from "react-router-dom";
import Post, { PostModel } from "../components/Post";
import { posts } from "../data/posts";

export default function PostRoute() {
  let params = useParams();
  const post = posts.find((item) => item.id.toString() === params?.id);

  if (!post) {
    return <div>Ingen post</div>;
  }

  return (
    <>
      <Link className="header-back-to" to="/">
        Tillbaka
      </Link>

      <Post post={post}></Post>
    </>
  );
}
