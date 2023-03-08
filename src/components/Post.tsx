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

export default function Post({ post }: PostProps) {
  const clickPicture = () => {
    alert("You have clicked");
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
      </Link>
      <h3>{post.author}</h3>
      <img onClick={clickPicture} src={post.img} alt="" />
      <div>{post.text}</div>
    </div>
  );
}
