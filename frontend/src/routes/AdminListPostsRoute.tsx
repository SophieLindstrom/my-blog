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

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts) {
    return <div>No posts...</div>;
  }

  async function deletePost(id: number) {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    console.log("delete");
    try {
      const response = await axios.delete(
        `http://localhost:4000/deletepost/${id}`
      );
      getPosts();
      console.log(response.data);

      setError(null);
    } catch (err) {
      setError((err as unknown as any).message);
      setPosts(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl">List Posts</h1>
      <div className="grid gap-4">
        {posts.map((item, index) => (
          <div className=" bg-slate-300 dark:bg-slate-800 p-4 flex justify-between gap-2">
            <div>
              <div className="text-xl">
                #{item.id}{" "}
                <Link to={`/admin/posts/edit/${item.id}`}>{item.title}</Link>
              </div>
              <div className="text-slate-700">{item.author}</div>
            </div>
            <button
              className="bg-red-600 p-4 text-white"
              onClick={() => deletePost(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
