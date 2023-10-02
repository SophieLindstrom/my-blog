import { Link } from "react-router-dom";
import { PostModel } from "./Post";

interface PostProps {
  post: PostModel;
}

export default function FrontPostItem({ post }: PostProps) {
  return (
    <>
      <Link
        className="group bg-slate-300 hover:bg-emerald-200 p-2 dark:hover:bg-emerald-800"
        to={`/post/${post.id}`}
      >
        <div className="blog-post blog-post-front-item">
          <div className="overflow-hidden w-full aspect-video">
            <img className="object-cover w-full" src={post.image} />
          </div>
          <h1 className="group-hover:text-purple-500 text-center p-4 text-lg block">
            {post.title}
          </h1>
        </div>
      </Link>
    </>
  );
}
