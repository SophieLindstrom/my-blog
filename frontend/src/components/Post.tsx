import { Link } from "react-router-dom";
import CommentBox from "./CommentBox";

export interface PostModel {
  id: number;
  title: string;
  author: string;
  image?: string;
  text: String;
}

export interface PostModelDataImport {
  id?: number;
  title: string;
  author: string;
  image?: string;
  text: String;
}

interface PostProps {
  post: PostModel;
}

export default function Post({ post }: PostProps) {
  const clickPicture = () => {
    alert("You have clicked");
  };

  return (
    <>
      <div className="blog-post" style={{ marginBottom: 20 }}>
        <Link
          className="post-title-link post-title-link-post red text-large"
          to={`/post/${post.id}`}
        >
          <h1 className="post-title">{post.title}</h1>
        </Link>

        <img
          className="post-image"
          onClick={clickPicture}
          src={post.image}
          alt=""
        />
        <h3 className="post-author">Författare: {post.author}</h3>
        <div className="post-content">{post.text}</div>
        <div>
          <CommentBox />
        </div>
      </div>
    </>
  );
}
