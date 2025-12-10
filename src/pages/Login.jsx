import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
            <div className="hero w-full max-w-5xl">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                    {/* Right: Illustration / text */}
                    <div className="text-center lg:text-left max-w-md">
                        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/40 mb-3">
                            🧸 Welcome back, toy lover!
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 leading-tight">
                            Sign in to{' '}
                            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                                Toy House
                            </span>
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Access your dashboard, manage your toys, and discover new arrivals.
                            Secure, playful, and made just for you.
                        </p>
                    </div>

                    {/* Left: Login card */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900/95 border border-slate-800/90 backdrop-blur-md rounded-3xl">
                        <div className="px-8 pt-8">
                            <div className="flex flex-col items-center mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center mb-3 shadow-lg shadow-sky-500/30">
                                    <span className="text-2xl">🧸</span>
                                </div>
                                <h2 className="text-2xl font-semibold text-slate-50">
                                    Welcome back
                                </h2>
                                <p className="text-xs text-slate-400 mt-1">
                                    Log in to continue your Toy House journey
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleLogin} className="card-body pt-2 pb-5">
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-sm font-medium text-slate-200">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="input input-bordered bg-slate-900 border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                />
                            </div>

                            {/* Password */}
                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text text-sm font-medium text-slate-200">
                                        Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="••••••••"
                                    className="input input-bordered bg-slate-900 border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover text-xs text-sky-400"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            {/* Login button */}
                            <div className="form-control mt-4">
                                <button
                                    type="submit"
                                    className="btn w-full tracking-wide bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-slate-50 hover:from-sky-400 hover:to-indigo-400"
                                >
                                    Log in
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-3 my-4">
                                <span className="h-px flex-1 bg-slate-700" />
                                <span className="text-xs text-slate-500 uppercase tracking-wide">
                                    OR
                                </span>
                                <span className="h-px flex-1 bg-slate-700" />
                            </div>

                            {/* Google button */}
                            <button
                                type="button"
                                onClick={handleGoogleLogIn}
                                className="btn btn-outline w-full flex items-center justify-center gap-2 border-slate-600 text-slate-100 hover:bg-slate-800"
                            >
                                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-bold text-slate-900">
                                    G
                                </span>
                                <span className="text-sm">Sign in with Google</span>
                            </button>

                            {/* Footer text */}
                            <p className="mt-4 text-center text-xs md:text-sm text-slate-400">
                                New to Toy House?{' '}
                                <Link
                                    className="text-orange-400 font-semibold hover:underline"
                                    to="/singup"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
