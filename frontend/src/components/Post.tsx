import { Link } from "react-router-dom";
import CommentBox from "./CommentBox";

export interface PostModel {
  id: number;
  title: string;
  author: string;
  image?: string;
  text: string;
}

export interface PostModelDataImport {
  title: string;
  author: string;
  image?: string;
  text: string;
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

        <div
          className="overflow-hidden w-full aspect-video"
          onClick={clickPicture}
        >
          <img className="object-cover w-full" src={post.image} />
        </div>
        <h3 className="post-author">Författare: {post.author}</h3>
        <div className="post-content">{post.text}</div>
        <div>
          <CommentBox />
        </div>
      </div>
    </>
  );
}
