import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
  const loadedToy = useLoaderData();
  const navigate = useNavigate();
  const [toast, setToast] = useState({ type: '', message: '' });

  const {
    _id,
    picture,
    toy_name,
    seller_name,
    seller_email,
    price,
    sub_category,
    rating,
    available_quantity,
    detail_description,
  } = loadedToy || {};

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: '', message: '' }), 3000);
  };

  const handleUpdateToy = async (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedToy = {
      picture: form.picture.value,
      toy_name: form.toy_name.value,
      seller_name: form.seller_name.value,
      seller_email: form.seller_email.value,
      price: parseFloat(form.price.value),
      sub_category: form.sub_category.value,
      rating: parseFloat(form.rating.value),
      available_quantity: parseInt(form.available_quantity.value, 10),
      detail_description: form.detail_description.value,
    };

    try {
      const res = await fetch(
        `https://assingment11-server-arafatrahman862.vercel.app/addtoys/${_id}`,
        {
          method: 'PUT', // or PATCH based on your backend
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updatedToy),
        }
      );

      const data = await res.json();
      if (data.modifiedCount > 0 || data.acknowledged) {
        showToast('success', 'Toy updated successfully ✅');
        // navigate('/mytoy'); // uncomment if you want to redirect
      } else {
        showToast('error', 'No changes were made.');
      }
    } catch (err) {
      console.error(err);
      showToast('error', 'Something went wrong. Please try again.');
    }
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

      <section className="min-h-screen bg-slate-900/80 text-slate-100 flex items-center justify-center px-4 py-10 md:py-16">
        <div className="w-full max-w-4xl bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="px-6 md:px-10 pt-8 pb-4 border-b border-slate-800">
            <h1 className="text-2xl md:text-3xl font-bold">Update Toy</h1>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              Edit the details below and save changes for this toy.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdateToy} className="px-6 md:px-10 pb-8 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left column */}
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">
                      Picture URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="picture"
                    defaultValue={picture}
                    placeholder="https://example.com/toy-image.jpg"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">Toy Name</span>
                  </label>
                  <input
                    type="text"
                    name="toy_name"
                    defaultValue={toy_name}
                    placeholder="Awesome Puzzle Pack"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    name="seller_name"
                    defaultValue={seller_name}
                    placeholder="Your name / shop name"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">
                      Seller Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="seller_email"
                    defaultValue={seller_email}
                    placeholder="seller@example.com"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">Price ($)</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="price"
                    defaultValue={price}
                    placeholder="9.99"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">
                      Sub-category
                    </span>
                  </label>
                  <input
                    type="text"
                    name="sub_category"
                    defaultValue={sub_category}
                    placeholder="Puzzles / Vehicles / Dolls"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">Rating</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    name="rating"
                    defaultValue={rating}
                    placeholder="4.5"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-200">
                      Available Quantity
                    </span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="available_quantity"
                    defaultValue={available_quantity}
                    placeholder="10"
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Description full width */}
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text text-slate-200">
                  Detail Description
                </span>
              </label>
              <textarea
                name="detail_description"
                defaultValue={detail_description}
                placeholder="Describe the toy, materials, recommended age, features, etc."
                className="textarea textarea-bordered bg-slate-900 border-slate-800 text-slate-100 min-h-[90px]"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex justify-center">
              <input
                className="btn btn-primary px-10 rounded-full"
                type="submit"
                value="Update Toy"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Update;
