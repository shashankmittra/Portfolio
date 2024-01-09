"use client"

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Backgroundcircles from './Backgroundcircles'
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    
    const [text, count] = useTypewriter({
        words: ["Hi, The name's Shashank", "Guy-who-loves-Coffee.tsx",
            "<ButLoveToCode />"],
        loop: true,
        delaySpeed: 2000
    });

  return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center
      text-center overflow-hidden'>
          <Backgroundcircles />
          <img
              className='relative rounded-full h-32 w-32 mx-auto object-cover'
              src='https://media.licdn.com/dms/image/C5603AQF5aY369b8E6w/profile-displayphoto-shrink_200_200/0/1630047579523?e=2147483647&v=beta&t=Iwya8YPhVFF-1xkYvFf_-vUd_XtGO-ZYEqN8ElszUSc'
          />
          <div className='z-20'>
              <h2 className='text-sm uppercase pb-2 text-gray-500 tracking-[15px]'>
                  software engineer
              </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='="#F7AB0A' />
              </h1>
              
              <div className='pt-4'>
                  <Link href='#about'>
                    <button className='heroButton'>About</button>
                  </Link>
                  <Link href = '#experience'>
                  <button className='heroButton'>Experience</button>
                  </Link>
                  <Link href = '#skills'>
                  <button className='heroButton'>Skills</button>
                  </Link>
                  <Link href = '#projects'>
                  <button className='heroButton'>Projects</button>
                  </Link>   
            </div>

          </div>
    </div>
  )
}

export default Hero