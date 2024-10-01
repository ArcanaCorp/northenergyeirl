import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import './styles/blog.css'
import BlogCard from '../../components/Cards/Blog'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

import 'swiper/css';
import { useRef } from 'react';
import { useDB } from '../../context/DBContext';

export default function Blog ({ page }) {

    const { blogs } = useDB();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (

        <section className="__section __section_blog">

            <div className='__title'>

                <h2>
                    <p className='__title_txt_1'>Últimas noticias desde</p>
                    <p className='__title_txt_2'>Nuestro Blog</p>
                    <svg className='__trz' width="154" height="67" viewBox="0 0 154 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.97485 65.3489C7.3402 55.0247 22.091 24.8408 30.6416 14.4768C33.6603 10.8178 37.4189 6.83648 42.0931 6.0285C51.0151 4.48626 57.7976 20.1195 60.5369 23.7897C64.4599 29.0461 68.8778 39.0534 77.2667 31.7982C81.1209 28.4648 82.969 23.3509 85.7605 19.0878C87.269 16.784 94.8787 -1.17205 103.689 2.00909C109.895 4.25017 119.437 23.3872 121.95 26.8232C124.087 29.7437 126.023 33.5933 129.489 34.6345C134.913 36.2643 136.32 25.4061 138.271 20.0888C139.053 17.9557 140.271 9.01718 145.43 13.1724C149.653 16.5741 150.463 22.5144 152.407 27.1266" stroke="#034184" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </h2>

                {!page && (
                    <div className='__controls_slide'>
                        <button className='__btn_slide' ref={prevRef}><IconArrowLeft/></button>
                        <button className='__btn_slide' ref={nextRef}><IconArrowRight/></button>
                    </div>
                )}

            </div>

            {!page && (
                <div className='__slide_blog'>

                    <Swiper slidesPerView={3} spaceBetween={30} navigation={{prevEl: prevRef.current, nextEl: nextRef.current}} onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = prevRef.current; swiper.params.navigation.nextEl = nextRef.current; }} autoplay={{delay: 2500, disableOnInteraction: true}} loop={true} modules={[Autoplay, Navigation]} breakpoints={{360: { slidesPerView: 1, spaceBetween: 20 }, 768: { slidesPerView: 4, spaceBetween: 40}, 1024: { slidesPerView: 3, spaceBetween: 50}}}>
                        {blogs.map((blog) => (
                            <SwiperSlide key={blog.id_blog}>
                                <BlogCard key={blog.id_blog} slug={blog.slug_blog} title={blog.title_blog} text={blog.text_blog} images={blog.images} date={blog.date_blog} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            )}

            {page && (
                <div className='__gride_blog'>

                    {blogs.map((blog) => (
                        <BlogCard key={blog.id_blog} slug={blog.slug_blog} title={blog.title_blog} text={blog.text_blog} images={blog.images} date={blog.date_blog} />
                    ))}

                </div>
            )}

        </section>

    )

}