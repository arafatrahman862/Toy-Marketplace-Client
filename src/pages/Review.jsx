import React from 'react';

const reviews = [
    {
        name: "Kids Retail Concept, Romania",
        date: "Dec 28, 2021",
        avatar:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww",
        text: `For over 5 years we have been honored to be the representatives of the Cubika and Puzzlika brands in Romania. The products have always been at the highest level of quality and we have always enjoyed the fact that the Cubika team is constantly striving to bring new and very attractive products to the range. We are happy to be part of the Levenya team and I would like to thank Nicholas and Vitalyi for the extraordinary partnership we have and for the trust and support they have given us from the beginning.`,
    },
    {
        name: "MagicBaby, Czech Republic",
        date: "Sep 28, 2021",
        avatar:
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        text: `The goods of the CUBIKA and Puzzlika brands have very high-quality and precise processing, pleasing design and are completely affordable, which is why they quickly found their place on our market. From a business point of view, we can only recommend these brands to everyone, because we do not even have to deal with proper complaints. In addition, Levenya is a very good business partner and provides us with quality service.`,
    },
    {
        name: "Old Teddy's Company, Spain",
        date: "Sep 27, 2021",
        avatar:
            "https://plus.unsplash.com/premium_photo-1682096358356-5ffbe52b7aa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        text: `Before introducing a new brand in the Spanish market, we make sure that it represents our company values. In this sense, Cubika and Puzzlika outstand for they produce high-quality sustainable toys and games with great educational and ludic content. The building blocks, wooden towers, jigsaws, threading games, mosaics or imitation games, all in wood from sustainable forests or from FSC cardboard, and with non-toxic, vegan paint, are perfect in terms of design and play value.`,
    },
];

const Review = () => {
    return (
        <section className="mt-12 md:mt-16 ">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-100">
                    Customer Reviews
                </h2>
                <p className="text-center text-sm md:text-base text-slate-400 mt-2 mb-8">
                    What our partners and customers say about our toys.
                </p>

                <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                    {reviews.map((review) => (
                        <article
                            key={review.name}
                            className="bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl p-6 flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-200"
                        >
                            <div className="flex flex-col items-center text-center mb-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-slate-800 mb-3"
                                />
                                <h3 className="font-semibold text-base md:text-lg text-slate-50">
                                    {review.name}
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">{review.date}</p>
                                <div className="mt-2 text-amber-300 text-sm">
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>

                            <p className="text-sm md:text-[15px] text-slate-300 leading-relaxed flex-1">
                                {review.text}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
