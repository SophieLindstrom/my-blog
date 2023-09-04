import axios from "axios";
import { title } from "process";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Post, { PostModel } from "../components/Post";

export default function AdminListPostsRoute() {
  const [posts, setPosts] = useState<PostModel[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      console.log("get posts");
      try {
        const response = await axios.get(`http://localhost:4000/posts`);
        console.log(response.data);
        setPosts(response.data);

        setError(null);
      } catch (err) {
        setError((err as unknown as any).message);
        setPosts(null);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts) {
    return <div>No posts...</div>;
  }

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl">List Posts</h1>
      <div className="grid gap-4">
        {posts.map((item, index) => (
          <div className=" bg-slate-300 p-4">
            <div className="text-xl">
              #{item.id}{" "}
              <Link to={`/admin/posts/edit/${item.id}`}>{item.title}</Link>
            </div>
            <div className="text-slate-700">{item.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
