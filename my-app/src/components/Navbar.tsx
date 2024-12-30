import { handleLogout } from "@/actions";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            G A L O R A
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/wishlist" className="justify-between">
                  Wishlist
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="/login">Masuk</Link>
              </li>
              <li>
                <Link href="/register">Daftar</Link>
              </li>
              <li>
                <form action={handleLogout}>
                  <button type="submit">Logout</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
