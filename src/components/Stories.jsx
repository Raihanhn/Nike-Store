import React from 'react'
import Title from './utils/Title'

import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaHashtag } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {truncate} from 'lodash';

const Stories = ({story: {title, news}}) => {

  

  return (
    <>
      <div className="nike-container mb-11 ">
        <Title title={title}/>
        <div className='mt-7'>
           <Swiper 
        
            spaceBetween={15}
            breakpoints={{
              1200: {
                slidesPerView: 4,
                padding: '2rem',
                type: 'loop',
                rewind: true,
                keyboard: 'global',
              },
              991: {
                slidesPerView: 3,
                padding: '2rem',
                type: 'loop',
                rewind: true,
                keyboard: 'global',
              },
              768: {
                slidesPerView: 2,
                padding: '2rem',
                type: 'loop',
                rewind: true,
                keyboard: 'global',
              },
              500: {
                slidesPerView: 1,
                padding: '2rem',
                type: 'loop',
                rewind: true,
                keyboard: 'global',
              },
              425: {
                slidesPerView: 1,
                padding: '2rem',
                type: 'loop',
                rewind: true,
                keyboard: 'global',
              },
            }}
            
           
            
            
            
           >
               {news.map((val, i) => (
                <SwiperSlide key={i} className='mb-0.5' >
                      <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                        <div className='flex items-center justify-center'>
                            <img src={val.img} alt={`img/story/$ {i}`} className='w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg' />
                        </div>
                        <div className='flex items-center justify-between w-full px-4'>
                            <div className='flex items-center gap-0.5'><AiFillHeart className='icon-style text-red-500 w-5 h-5' /><span className='text-xs font-bold'>{val.like} </span></div>
                            <div className='flex items-center gap-0.5'><AiOutlineClockCircle className='icon-style w-4 h-4 text-black ' /><span className='text-xs font-bold'>{val.time} </span></div>
                            <div className='flex items-center gap-0.5'><FaHashtag className='icon-style text-blue-600' /><span className='text-xs font-bold text-blue-600'>{val.by} </span></div>
                        </div>
                        <div className='grid items-center justify-items-start px-4 '>
                            <h1 className='text-base font-semibold lg:text-sm'> {val.title} </h1>
                            <p className='text-sm text-justify lg:text-xs'> {truncate(val.text, {length: 175} )} </p>
                        </div>
                        <div className='flex items-center justify-center px-4 w-full'>
                            <a href={val.url} target='_blank' role={'button'} className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme ' >{val.btn} </a>
                        </div>
                      </div>
                </SwiperSlide>
               ))}
           </Swiper>
        </div>
      </div>
    </>
  )
}

export default Stories