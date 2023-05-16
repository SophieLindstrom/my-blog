import { Link } from "react-router-dom";

export interface PostModel {
  id: number;
  title: string;
  author: string;
  img?: string;
  text: String;
}

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
          src={post.img}
          alt=""
        />
        <Link className="post-title-link" to={`/post/${post.id}`}>
          <h1 className="post-title">{post.title}</h1>
        </Link>
      </div>
    </>
  );
}
