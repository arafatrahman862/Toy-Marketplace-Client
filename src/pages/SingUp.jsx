import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SingUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                // later you can add a toast or redirect
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
            <div className="hero w-full max-w-5xl">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    {/* Left side: text / illustration */}
                    <div className="text-center lg:text-left max-w-md">
                        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-pink-500/10 text-pink-300 border border-pink-500/40 mb-3">
                            🎉 Join the Toy House family
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 leading-tight">
                            Create your{' '}
                            <span className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-transparent">
                                Toy House
                            </span>{' '}
                            account
                        </h1>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            Save your favourite toys, manage your wishlist, and enjoy a magical
                            shopping experience built for kids and their grown-ups.
                        </p>
                    </div>

                    {/* Right side: sign up card */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900/95 border border-slate-800/90 backdrop-blur-md rounded-3xl">
                        <div className="px-8 pt-8">
                            <div className="flex flex-col items-center mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-amber-300 flex items-center justify-center mb-3 shadow-lg shadow-pink-500/30">
                                    <span className="text-2xl">🎈</span>
                                </div>
                                <h2 className="text-2xl font-semibold text-slate-50">
                                    Sign Up
                                </h2>
                                <p className="text-xs text-slate-400 mt-1">
                                    It only takes a minute to get started
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSingUp} className="card-body pt-2 pb-5">
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-sm font-medium text-slate-200">
                                        Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                    className="input input-bordered bg-slate-900 border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                                />
                            </div>

                            {/* Email */}
                            <div className="form-control mt-2">
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
                                    className="input input-bordered bg-slate-900 border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                                />
                            </div>

                            {/* Photo URL */}
                            <div className="form-control mt-2">
                                <label className="label">
                                    <span className="label-text text-sm font-medium text-slate-200">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    required
                                    placeholder="https://your-photo-link.com"
                                    className="input input-bordered bg-slate-900 border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
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
                                    placeholder="Create a strong password"
                                    className="input input-bordered bg-slate-900 border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-[11px] text-slate-500">
                                        Use at least 6+ characters for better security.
                                    </span>
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="form-control mt-4">
                                <button
                                    type="submit"
                                    className="btn w-full tracking-wide bg-gradient-to-r from-pink-500 to-amber-400 border-none text-slate-900 font-semibold hover:from-pink-400 hover:to-amber-300"
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Footer text */}
                            <p className="mt-4 text-center text-xs md:text-sm text-slate-400">
                                Already have an account?{' '}
                                <Link
                                    className="text-orange-400 font-semibold hover:underline"
                                    to="/login"
                                >
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
