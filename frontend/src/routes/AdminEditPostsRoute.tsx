import { useParams } from "react-router-dom";
import AdminPostsForm from "../components/AdminPostsForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminEditPostsRoute() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  let params = useParams();

  const id = params?.id;

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/post/${id}`);
        console.log(response);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Ingen post</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">Edit Post {id}</h1>
      <AdminPostsForm post={post} />
    </div>
  );
}
