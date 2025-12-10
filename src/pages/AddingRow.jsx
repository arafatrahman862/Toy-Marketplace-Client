import React from 'react';
import { Link } from 'react-router-dom';

const AddingRow = ({ adding, handleDelete, handleAddingConfirm }) => {
    const {
        toy_name,
        name,
        picture,
        seller_name,
        seller_email,
        available_quantity,
        rating,
        sub_category,
        price,
        detail_description,
        _id,
        status,
    } = adding;

    const displayName = toy_name || name || 'Unnamed Toy';

    return (
        <tr className="hover:bg-slate-800/70 transition-colors">
            {/* Toy + image */}
            <td className="px-4 py-4 align-middle">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-700 flex-shrink-0">
                        {picture ? (
                            <img
                                src={picture}
                                alt={displayName}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-300">
                                NO IMG
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="font-semibold text-slate-50 truncate max-w-[180px] md:max-w-xs">
                            {displayName}
                        </div>
                        {detail_description && (
                            <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 max-w-xs">
                                {detail_description}
                            </div>
                        )}
                    </div>
                </div>
            </td>

            {/* Seller */}
            <td className="px-4 py-4 align-middle hidden md:table-cell">
                <span className="text-sm text-slate-200">
                    {seller_name || 'Unknown'}
                </span>
            </td>

            {/* Email */}
            <td className="px-4 py-4 align-middle hidden md:table-cell">
                <span className="text-xs text-slate-300 break-all">
                    {seller_email || '—'}
                </span>
            </td>

            {/* Quantity */}
            <td className="px-4 py-4 align-middle hidden md:table-cell">
                <span className="text-sm text-slate-200">
                    {available_quantity ?? '—'}
                </span>
            </td>

            {/* Rating */}
            <td className="px-4 py-4 align-middle hidden md:table-cell">
                <span className="inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-400/40">
                    ⭐ {rating ?? 'N/A'}
                </span>
            </td>

            {/* Category */}
            <td className="px-4 py-4 align-middle hidden md:table-cell">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] bg-slate-800 text-slate-200 border border-slate-700">
                    {sub_category || 'N/A'}
                </span>
            </td>

            {/* Price */}
            <td className="px-4 py-4 align-middle">
                <span className="text-sm font-semibold text-emerald-300">
                    ${Number(price).toFixed(2)}
                </span>
            </td>

            {/* Actions */}
            <td className="px-4 py-4 align-middle">
                <div className="flex flex-col gap-2 items-end md:flex-row md:items-center md:justify-end">
                    {status === 'confirm' && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                            Confirmed
                        </span>
                    )}

                    <div className="flex gap-2">
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-xs md:btn-sm btn-outline border-sky-500 text-sky-300 hover:bg-sky-600/20 rounded-full">
                                Update
                            </button>
                        </Link>

                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-xs md:btn-sm btn-outline border-rose-500 text-rose-300 hover:bg-rose-600/20 rounded-full"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default AddingRow;
