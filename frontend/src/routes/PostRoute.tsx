import { Link, useParams } from "react-router-dom";
import Post, { PostModel } from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostRoute() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let params = useParams();

  const id = params?.id;

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}`);

        setPost(response.data);

        setError(null);
      } catch (err) {
        setError((err as unknown as any).message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
