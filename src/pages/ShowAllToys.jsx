import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllToys = ({ toys }) => {
    const {
        _id,
        toy_name,
        seller_name,
        sub_category,
        available_quantity,
        price,
        rating,
        picture,
    } = toys;

    return (
        <tr className="hover:bg-slate-800/70 transition-colors">
            {/* Toy + image */}
            <td className="px-4 py-4 text-left align-middle">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-700 flex-shrink-0">
                        {picture ? (
                            <img
                                src={picture}
                                alt={toy_name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-300">
                                NO IMG
                            </div>
                        )}
                    </div>
                    <div>
                        <div className="font-semibold text-slate-50 truncate max-w-[180px] md:max-w-full">
                            {toy_name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                            Sub Category:{' '}
                            <span className="text-slate-200 font-medium">
                                {sub_category || 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>
            </td>

            {/* Seller */}
            <td className="px-4 py-4 text-left align-middle hidden md:table-cell">
                <span className="text-sm text-slate-200">
                    {seller_name || 'Unknown seller'}
                </span>
            </td>

            {/* Sub Category (badge) */}
            <td className="px-4 py-4 text-left align-middle hidden md:table-cell">
                <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-800 text-[11px] text-slate-200 border border-slate-800">
                    {sub_category || 'N/A'}
                </span>
            </td>

            {/* Price */}
            <td className="px-4 py-4 text-left align-middle">
                <span className="text-sm font-semibold text-emerald-300">
                    ${Number(price).toFixed(2)}
                </span>
            </td>

            {/* Available quantity */}
            <td className="px-4 py-4 text-left align-middle hidden md:table-cell">
                <span className="text-sm text-slate-200">
                    {available_quantity ?? '—'}
                </span>
            </td>

            {/* Rating */}
            <td className="px-4 py-4 text-left align-middle hidden md:table-cell">
                <span className="inline-flex items-center gap-1 text-xs text-amber-300 bg-amber-500/10 px-2 py-1 rounded-full border border-amber-400/40">
                    ⭐ {rating ?? 'N/A'}
                </span>
            </td>

            {/* Details button */}
            <td className="px-4 py-4 text-center align-middle">
                <Link
                    to={`/singleToyShow/${_id}`}
                    className="btn btn-sm btn-outline border-sky-500 text-sky-300 hover:bg-sky-600/20 rounded-full px-4"
                >
                    View
                </Link>
            </td>
        </tr>
    );
};

export default ShowAllToys;
