import React, { useEffect, useState } from 'react';
import ShowAllToys from './ShowAllToys';

const AllToy = () => {
    const [allToys, setAllToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchToys = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(
                    'https://assingment11-server-arafatrahman862.vercel.app/alltoys',
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error('Failed to load toys. Please try again.');

                const data = await res.json();
                setAllToys(data || []);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error(err);
                    setError(err.message || 'Something went wrong while loading toys.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchToys();
        return () => controller.abort();
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="mb-6 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
                    All Toys
                </h1>
                <p className="text-sm md:text-base text-slate-400 mt-2">
                    Browse our full collection of toys available in the store.
                </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                {loading && (
                    <div className="py-10 flex items-center justify-center">
                        <span className="loading loading-spinner loading-lg mr-2" />
                        <span className="text-slate-200 text-sm md:text-base">
                            Loading toys...
                        </span>
                    </div>
                )}

                {!loading && error && (
                    <div className="py-10 text-center text-red-400 text-sm md:text-base">
                        {error}
                    </div>
                )}

                {!loading && !error && (
                    <>
                        {allToys.length === 0 ? (
                            <div className="py-10 text-center text-slate-300 text-sm md:text-base">
                                No toys found.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="table table-fixed w-full text-sm text-slate-100">
                                    <thead className="bg-slate-800 text-xs md:text-sm uppercase tracking-wide text-slate-300 sticky top-0 z-10">
                                        <tr>
                                            <th className="px-4 py-3 w-[32%] text-left">Toy</th>
                                            <th className="px-4 py-3 w-[18%] text-left hidden md:table-cell">
                                                Seller
                                            </th>
                                            <th className="px-4 py-3 w-[14%] text-left hidden md:table-cell">
                                                Sub Category
                                            </th>
                                            <th className="px-4 py-3 w-[10%] text-left">Price</th>
                                            <th className="px-4 py-3 w-[10%] text-left hidden md:table-cell">
                                                Available
                                            </th>
                                            <th className="px-4 py-3 w-[8%] text-left hidden md:table-cell">
                                                Rating
                                            </th>
                                            <th className="px-4 py-3 w-[8%] text-center">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-slate-900/60 divide-y divide-slate-800">
                                        {allToys.map((toys) => (
                                            <ShowAllToys key={toys._id} toys={toys} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default AllToy;
