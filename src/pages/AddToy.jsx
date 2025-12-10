import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [toast, setToast] = useState({ type: '', message: '' });

  const showToast = (type, message) => {
    setToast({ type, message });
    // auto-hide after 3 seconds
    setTimeout(() => setToast({ type: '', message: '' }), 3000);
  };

  const handleAddToys = async (event) => {
    event.preventDefault();
    const form = event.target;

    const picture = form.picture.value;
    const toy_name = form.toy_name.value;
    const seller_name = form.seller_name.value;
    const email = user?.email || form.email.value;
    const price = form.price.value;
    const sub_category = form.sub_category.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const detail_description = form.detail_description.value;

    const adding = {
      picture,
      toy_name,
      seller_name,
      seller_email: email,
      email,
      price: parseFloat(price),
      sub_category,
      rating: parseFloat(rating),
      available_quantity: parseInt(available_quantity, 10),
      detail_description,
    };

    try {
      const res = await fetch(
        'https://assingment11-server-arafatrahman862.vercel.app/addtoys',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(adding),
        }
      );

      const data = await res.json();
      if (data.insertedId) {
        showToast('success', 'Toy added successfully 🎉');
        form.reset();
      } else {
        showToast('error', 'Could not add toy. Please try again.');
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

      {/* Page */}
      <section className="min-h-screen bg-slate-900/80 text-slate-100 flex items-center justify-center px-4 py-10 md:py-16">
        <div className="w-full max-w-4xl bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="px-6 md:px-10 pt-8 pb-4 border-b border-slate-800">
            <h1 className="text-2xl md:text-3xl font-bold">Add a New Toy</h1>
            <p className="text-xs md:text-sm text-slate-400 mt-2">
              Fill in the details below to add a new toy to the Toy House
              collection.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleAddToys} className="px-6 md:px-10 pb-8 pt-6">
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
                    required
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
                    required
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
                    required
                    placeholder="Your name / shop name"
                    defaultValue={user?.displayName || ''}
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
                    name="email"
                    required
                    placeholder="seller@example.com"
                    defaultValue={user?.email || ''}
                    className="input input-bordered bg-slate-900 border-slate-800 text-slate-100"
                    readOnly={!!user?.email}
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
                    required
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
                    required
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
                    required
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
                    required
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
                required
                placeholder="Describe the toy, materials, recommended age, features, etc."
                className="textarea textarea-bordered bg-slate-900 border-slate-800 text-slate-100 min-h-[90px]"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex justify-center">
              <input
                className="btn btn-primary px-10 rounded-full"
                type="submit"
                value="Add Toy"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddToy;
