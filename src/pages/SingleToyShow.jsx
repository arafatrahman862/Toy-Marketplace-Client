import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToyShow = () => {
    const toys = useLoaderData();
    const {
        picture,
        toy_name,
        seller_name,
        seller_email,
        price,
        rating,
        available_quantity,
        detail_description,
    } = toys || {};

    return (
        <section className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
            {/* Back link */}
            <div className="mb-4">
                <Link
                    to="/alltoy"
                    className="inline-flex items-center text-xs md:text-sm text-slate-300 hover:text-sky-300 transition-colors"
                >
                    ← Back to all toys
                </Link>
            </div>

            <div className="bg-slate-900/85 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid gap-8 md:grid-cols-2 items-start p-6 md:p-10">
                    {/* Image */}
                    <div className="relative">
                        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={picture}
                                alt={toy_name}
                                className="w-full h-64 md:h-80 object-cover"
                            />
                        </div>

                        {/* Rating badge */}
                        <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 backdrop-blur">
                                ⭐ {rating ?? 'N/A'}
                            </span>
                        </div>

                        {/* Quantity badge */}
                        <div className="absolute bottom-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 backdrop-blur">
                                In stock: {available_quantity ?? 'N/A'}
                            </span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-4 text-slate-50">
                        <h1 className="text-2xl md:text-3xl font-extrabold leading-snug">
                            {toy_name}
                        </h1>

                        <div className="flex flex-wrap gap-3 items-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-slate-800 text-emerald-300 border border-emerald-500/40">
                                ${Number(price).toFixed(2)}
                            </span>
                            <span className="text-xs text-slate-400">
                                Rating:{' '}
                                <span className="font-semibold text-slate-200">
                                    {rating ?? 'N/A'}
                                </span>
                            </span>
                        </div>

                        <div className="border-t border-slate-800 pt-4 space-y-2 text-sm md:text-base">
                            <p className="text-slate-300">
                                <span className="font-semibold text-slate-100">
                                    Seller Name:
                                </span>{' '}
                                {seller_name}
                            </p>
                            <p className="text-slate-300 break-all">
                                <span className="font-semibold text-slate-100">
                                    Seller Email:
                                </span>{' '}
                                {seller_email}
                            </p>
                        </div>

                        <div className="border-t border-slate-800 pt-4">
                            <h2 className="text-sm font-semibold text-slate-200 mb-1 uppercase tracking-wide">
                                Description
                            </h2>
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                {detail_description}
                            </p>
                        </div>

                        <div className="pt-2">
                            <button className="btn btn-primary rounded-full px-6 mt-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleToyShow;
