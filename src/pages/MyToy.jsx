import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import AddingRow from './AddingRow';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [adding, setAdding] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [toast, setToast] = useState({ type: '', message: '' });

    const email = user?.email;

    const showToast = (type, message) => {
        setToast({ type, message });
        setTimeout(() => setToast({ type: '', message: '' }), 3000);
    };

    useEffect(() => {
        if (!email) return; // wait until user is loaded

        const controller = new AbortController();

        const fetchToys = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(
                    `https://assingment11-server-arafatrahman862.vercel.app/addtoys?email=${email}`,
                    { signal: controller.signal }
                );
                if (!res.ok) throw new Error('Failed to load your toys');
                const data = await res.json();
                setAdding(data || []);
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
    }, [email]);

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete this toy?');
        if (!proceed) return;

        fetch(
            `https://assingment11-server-arafatrahman862.vercel.app/addtoys/${id}`,
            {
                method: 'DELETE',
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    const remaining = adding.filter((toy) => toy._id !== id);
                    setAdding(remaining);
                    showToast('success', 'Toy deleted successfully');
                }
            })
            .catch((err) => {
                console.error(err);
                showToast('error', 'Failed to delete toy. Please try again.');
            });
    };

    const handleAddingConfirm = (id) => {
        fetch(
            `https://assingment11-server-arafatrahman862.vercel.app/addtoys/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ status: 'confirm' }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const remaining = adding.filter((toy) => toy._id !== id);
                    const updated = adding.find((toy) => toy._id === id);
                    if (updated) {
                        updated.status = 'confirm';
                        const newAdding = [updated, ...remaining];
                        setAdding(newAdding);
                        showToast('success', 'Toy marked as confirmed');
                    }
                }
            })
            .catch((err) => {
                console.error(err);
                showToast('error', 'Failed to update toy. Please try again.');
            });
    };

    return (
        <>
            {/* Toast */}
            {toast.message && (
                <div className="fixed top-4 right-4 z-50">
                    <div
                        className={`alert shadow-lg rounded-2xl border bg-slate-900/95 text-slate-100 max-w-xs ${toast.type === 'success'
                                ? 'border-emerald-500/70'
                                : 'border-rose-500/70'
                            }`}
                    >
                        <span className="text-xl">
                            {toast.type === 'success' ? '✅' : '⚠️'}
                        </span>
                        <span className="text-sm">{toast.message}</span>
                        <button
                            onClick={() => setToast({ type: '', message: '' })}
                            className="btn btn-xs btn-ghost text-slate-300 ml-2"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Page */}
            <section className="min-h-screen bg-slate-900/80 text-slate-100 py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">My Toys</h1>
                            <p className="text-sm text-slate-400 mt-1">
                                Manage all toys you have added to Toy House.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
                        {loading && (
                            <div className="py-10 flex items-center justify-center">
                                <span className="loading loading-spinner loading-lg mr-2" />
                                <span className="text-slate-200 text-sm md:text-base">
                                    Loading your toys...
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
                                {adding.length === 0 ? (
                                    <div className="py-10 text-center text-slate-300 text-sm md:text-base">
                                        You haven’t added any toys yet.
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="table w-full text-sm text-slate-100">
                                            <thead className="bg-slate-800 text-xs md:text-sm uppercase tracking-wide text-slate-300">
                                                <tr>
                                                    <th className="px-4 py-3">Toy</th>
                                                    <th className="px-4 py-3 hidden md:table-cell">
                                                        Seller
                                                    </th>
                                                    <th className="px-4 py-3 hidden md:table-cell">
                                                        Email
                                                    </th>
                                                    <th className="px-4 py-3 hidden md:table-cell">
                                                        Quantity
                                                    </th>
                                                    <th className="px-4 py-3 hidden md:table-cell">
                                                        Rating
                                                    </th>
                                                    <th className="px-4 py-3 hidden md:table-cell">
                                                        Category
                                                    </th>
                                                    <th className="px-4 py-3">Price</th>
                                                    <th className="px-4 py-3 text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-slate-900/60 divide-y divide-slate-800">
                                                {adding.map((item) => (
                                                    <AddingRow
                                                        key={item._id}
                                                        adding={item}
                                                        handleDelete={handleDelete}
                                                        handleAddingConfirm={handleAddingConfirm}
                                                    />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyToy;
