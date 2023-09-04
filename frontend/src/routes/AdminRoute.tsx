import { Link, Outlet } from "react-router-dom";

export default function AdminRoute() {
  return (
    <div>
      <div className="bg-[lightgrey] p-8 mb-8 flex gap-8">
        <div>
          <Link to="/admin/posts/create">CREATE POST</Link>
        </div>
        <div>
          <Link to="/admin/posts/list">LIST POSTS</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
