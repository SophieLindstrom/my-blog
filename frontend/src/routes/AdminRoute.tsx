import { Link, Outlet } from "react-router-dom";

export default function AdminRoute() {
  return (
    <div>
      <div className="bg-[lightgrey] p-8 mb-8 flex gap-8">
        <div>
          <Link to="/admin/createpost">CREATE POST</Link>
        </div>
        <div>
          <Link to="/admin/createpost">LIST POSTS</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
