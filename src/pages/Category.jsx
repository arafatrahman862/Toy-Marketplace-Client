import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // keep if you need, or remove if not

const categories = [
    {
        name: 'Puzzles',
        items: [
            {
                title: 'African Animals',
                price: 20,
                rating: 4.0,
                img: 'https://plus.unsplash.com/premium_photo-1664110691125-e89512988baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRveXN8ZW58MHx8MHx8fDA%3D',
            },
            {
                title: 'Air Transport',
                price: 22,
                rating: 4.2,
                img: 'https://images.unsplash.com/photo-1558907353-ceb54f3882ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHRveXN8ZW58MHx8MHx8fDA%3D',
            },
        ],
    },
    {
        name: 'Pyramids',
        items: [
            {
                title: 'Pyramid',
                price: 30,
                rating: 4.3,
                img: 'https://plus.unsplash.com/premium_photo-1663127721165-f29d5bbd3da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
            },
            {
                title: 'Tower LD-15',
                price: 32,
                rating: 4.4,
                img: 'https://plus.unsplash.com/premium_photo-1723924946092-066c9facd69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8',
            },
        ],
    },
    {
        name: 'Construction Toys',
        items: [
            {
                title: 'Africa Construction Set',
                price: 38,
                rating: 4.5,
                img: 'https://plus.unsplash.com/premium_photo-1701984402122-0df5fd84ac53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRveXN8ZW58MHx8MHx8fDA%3D',
            },
            {
                title: 'Watch Construction Kit',
                price: 40,
                rating: 4.7,
                img: 'https://images.unsplash.com/photo-1626300881606-c2a174a2eefe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHRveXN8ZW58MHx8MHx8fDA%3D',
            },
        ],
    },
];

const Category = () => {
    return (
        <section className="my-10 ">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-2 text-slate-100">
                    Categories
                </h2>
                <p className="text-center text-sm md:text-base text-slate-400 mb-6">
                    Explore toys by category and find the perfect pick for every playtime.
                </p>

                <Tabs>
                    {/* Tabs */}
                    <TabList className="flex justify-center mb-6">
                        <div className="inline-flex gap-2 bg-slate-900/80 border border-slate-800 rounded-full p-1">
                            {categories.map((cat, index) => (
                                <Tab
                                    key={cat.name}
                                    className="px-4 md:px-5 py-1.5 text-xs md:text-sm rounded-full cursor-pointer text-slate-300 border border-transparent outline-none transition-all"
                                    selectedClassName="bg-sky-500 text-slate-900 font-semibold border-sky-400 shadow-md"
                                >
                                    {cat.name}
                                </Tab>
                            ))}
                        </div>
                    </TabList>

                    {/* Panels */}
                    {categories.map((cat) => (
                        <TabPanel key={cat.name}>
                            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 justify-items-center">
                                {cat.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className="card w-full max-w-sm bg-slate-900/90 text-slate-100 shadow-xl border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
                                    >
                                        <figure className="bg-slate-800/80">
                                            <img
                                                className="p-4 rounded-2xl h-52 w-full object-contain hover:scale-105 transition-transform duration-300"
                                                src={item.img}
                                                alt={item.title}
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <div className="flex items-start justify-between gap-3">
                                                <h3 className="card-title text-base md:text-lg">
                                                    {item.title}
                                                </h3>
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-400/40">
                                                    ${item.price}
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between mt-1 text-xs text-slate-400">
                                                <span>
                                                    Rating:{' '}
                                                    <span className="text-amber-300 font-semibold">
                                                        ⭐ {item.rating}
                                                    </span>
                                                </span>
                                                <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded-full">
                                                    {cat.name}
                                                </span>
                                            </div>

                                            <div className="card-actions mt-4">
                                                <button className="btn btn-sm btn-primary rounded-full w-full">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Category;
