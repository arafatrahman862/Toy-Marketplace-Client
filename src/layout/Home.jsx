import React from 'react';

import Category from '../pages/Category';
import Header from '../pages/Header';
import Review from '../pages/Review';

const toyCategories = [
    {
        name: 'Puzzles',
        img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG95c3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'Colorful jigsaw and wooden puzzles for growing minds.',
    },
    {
        name: 'Pyramids',
        img: 'https://plus.unsplash.com/premium_photo-1684623605109-263925d88106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG95c3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'Stacking and pyramid toys that build coordination.',
    },
    {
        name: 'Construction Toys',
        img: 'https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Blocks and building sets for little engineers.',
    },
    {
        name: 'Vehicles',
        img: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95c3xlbnwwfHwwfHx8MA%3D%3D',
        description: 'Cars, trucks and planes ready for adventure.',
    },
    {
        name: 'Other Toys',
        img: 'https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'Plushies, figures and more fun surprises.',
    },
];

const Home = () => {
    return (
        <div className="bg-slate-900/80 text-slate-100">
            {/* Top hero / header section */}
            <Header />

            {/* Category section from your other component */}
            <div className="max-w-6xl mx-auto px-4 mt-8">
                <Category />
            </div>

            {/* Toy category gallery */}
            <section className="my-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
                        Some Pictures of Toy Categories
                    </h2>
                    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                        Explore a few of our favorite toy categories. Each one is designed
                        to inspire creativity, learning, and endless fun.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                        {toyCategories.map((toy) => (
                            <div
                                key={toy.name}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 border border-slate-900 overflow-hidden flex flex-col"
                            >
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={toy.img}
                                        alt={toy.name}
                                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4 flex-1 flex flex-col ">
                                    <h3 className="text-lg font-semibold text-center mb-1 text-slate-900">
                                        {toy.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 text-center flex-1">
                                        {toy.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Review section */}
            <div className="max-w-6xl mx-auto px-4 pb-12">
                <Review />
            </div>
        </div>
    );
};

export default Home;
