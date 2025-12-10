import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    badge: 'New Collection',
    badgeTone: 'bg-pink-500/15 text-pink-300 border-pink-400/40',
    title: 'Discover Magical Toys for Curious Little Minds',
    description:
      'From soft plush friends to creative building sets – everything your child needs to play, learn, and imagine in one place.',
    primaryCta: 'Shop Now',
    secondaryCta: 'View All Categories',
    image:
      'https://images.unsplash.com/photo-1531214159280-079b95d26139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx0b3lzfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    badge: 'Up to 40% Off',
    badgeTone: 'bg-amber-500/15 text-amber-300 border-amber-400/40',
    title: 'Big Savings on Your Kids’ Favorite Toys',
    description:
      'Limited-time offers on puzzles, vehicles, plushies, and more. Bring home fun without breaking the bank.',
    primaryCta: 'View Offers',
    secondaryCta: 'Learn More',
    image:
      'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG95c3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    badge: 'Learning & Play',
    badgeTone: 'bg-sky-500/15 text-sky-300 border-sky-400/40',
    title: 'Build Skills with STEM & Creative Toys',
    description:
      'Encourage problem-solving, creativity, and imagination with toys that grow with your child.',
    primaryCta: 'Explore STEM Toys',
    secondaryCta: null,
    image:
      'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRveXN8ZW58MHx8MHx8fDA%3D',
  },
];

const Header = () => {
  return (
    <section className="pt-4 md:mt-8 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            grabCursor
            className="rounded-3xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="w-full bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 rounded-3xl border border-slate-800 shadow-2xl px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    {/* Text */}
                    <div className="space-y-4 md:space-y-5 text-slate-50">
                      <span
                        className={
                          'inline-flex items-center text-[11px] md:text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full border ' +
                          slide.badgeTone
                        }
                      >
                        {slide.badge}
                      </span>
                      <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm md:text-base text-slate-200/90 max-w-md">
                        {slide.description}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <button className="btn btn-primary rounded-full px-6">
                          {slide.primaryCta}
                        </button>
                        {slide.secondaryCta && (
                          <button className="btn btn-ghost border-slate-500 rounded-full px-6">
                            {slide.secondaryCta}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                      <div className="bg-slate-100 rounded-2xl shadow-xl p-3 md:p-4 max-w-md w-full">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-40 md:h-52 lg:h-56 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Header;
