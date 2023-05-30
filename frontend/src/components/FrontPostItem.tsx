import { Link } from "react-router-dom";
import { PostModel } from "./Post";

interface PostProps {
  post: PostModel;
}

export default function FrontPostItem({ post }: PostProps) {
  const clickPicture = () => {
    alert("You have clicked");
  };

  return (
    <>
      <div className="blog-post blog-post-front-item">
        <img
          className="post-image"
          onClick={clickPicture}
          src={post.image}
          alt=""
        />
        <Link className="post-title-link" to={`/post/${post.id}`}>
          <h1 className="post-title">{post.title}</h1>
        </Link>
      </div>
    </>
  );
}
