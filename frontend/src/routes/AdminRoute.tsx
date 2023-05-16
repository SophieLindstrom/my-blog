import { Link, Outlet } from "react-router-dom";

export default function AdminRoute() {
  return (
    <div>
      <div className="admin-box menu">
        <div>
          <Link to="/admin/create-post">CREATE POST</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
