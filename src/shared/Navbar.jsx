import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const navLinks = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/alltoy">All Toys</Link>
            </li>
            <li>
                <Link to="/mytoy">My Toys</Link>
            </li>
            <li>
                <Link to="/addtoy">Add A Toy</Link>
            </li>
            <li>
                <Link to="/blog">Blogs</Link>
            </li>
        </>
    );

    return (
        <nav className="mt-2 md:mt-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 shadow-lg">
            <div className="navbar px-3 md:px-6">
                {/* Left: logo + brand */}
                <div className="navbar-start">
                    <div className="flex items-center gap-2">
                        <img
                            className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover border border-amber-400/70"
                            src="https://www.shutterstock.com/image-vector/cute-vector-toy-shop-logo-260nw-1628635720.jpg"
                            alt="Toy House Logo"
                        />
                        <Link to="/" className="btn btn-ghost px-0 normal-case flex flex-col items-start leading-tight">
                            <span className="text-2xl md:text-3xl font-extrabold text-amber-300 tracking-tight">
                                Toy <span className="text-pink-400">House</span>
                            </span>
                           
                        </Link>
                    </div>
                </div>

                {/* Center: nav items (desktop) */}
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 text-sm font-medium">
                        {navLinks}
                    </ul>
                </div>

                {/* Right: user / auth + mobile menu */}
                <div className="navbar-end gap-2">
                    {/* User section (desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        {user?.email ? (
                            <>
                                <div className="flex items-center gap-2">
                                    {user.photoURL && (
                                        <img
                                            src={user.photoURL}
                                            alt={user.displayName || 'User'}
                                            className="w-9 h-9 rounded-full object-cover border border-slate-600"
                                        />
                                    )}
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400">Welcome</span>
                                        <span className="text-sm font-semibold truncate max-w-[140px]">
                                            {user.displayName || user.email}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-sm btn-outline border-slate-600 hover:border-pink-400 hover:bg-pink-500/10"
                                >
                                    Log out
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="btn btn-sm btn-primary">
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile dropdown */}
                    <div className="dropdown dropdown-end md:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-slate-900/95 rounded-xl w-56 border border-slate-700"
                        >
                            {navLinks}
                            <div className="mt-2 border-t border-slate-700 pt-2">
                                {user?.email ? (
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2">
                                            {user.photoURL && (
                                                <img
                                                    src={user.photoURL}
                                                    alt={user.displayName || 'User'}
                                                    className="w-8 h-8 rounded-full object-cover border border-slate-600"
                                                />
                                            )}
                                            <span className="text-xs font-medium truncate max-w-[100px]">
                                                {user.displayName || user.email}
                                            </span>
                                        </div>
                                        <button
                                            onClick={handleLogOut}
                                            className="btn btn-xs btn-outline border-slate-600"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                ) : (
                                    <Link to="/login" className="btn btn-sm btn-primary w-full mt-1">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
