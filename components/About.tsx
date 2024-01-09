"use client"

import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
      <motion.div
          initial={{
              opacity:0
          }}
          whileInView={{
              opacity:1
          }}
          transition={{
              duration:1.5
          }}
          className='flex flex-col h-screen relative text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
              About
          </h3>
          <motion.img
              initial={{
                  x : -200,
                  opacity : 0  
              }}
              transition={{
                  duration:1.2
              }}
              whileInView={{
                  x: 0,
                  opacity:1
              }}
              viewport={{
                  once:true
              }}
              src='https://media.licdn.com/dms/image/C5603AQF5aY369b8E6w/profile-displayphoto-shrink_200_200/0/1630047579523?e=2147483647&v=beta&t=Iwya8YPhVFF-1xkYvFf_-vUd_XtGO-ZYEqN8ElszUSc'
              className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
              md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
          />

          <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold'>
                  Here is a {" "}
                  <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                  background
              </h4>
              <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque reprehenderit illum enim, nam autem suscipit! Soluta, minima quidem consequuntur error delectus autem saepe quam consectetur repudiandae eius quos vero.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus optio ut sequi non eum reprehenderit deserunt veniam provident. Veniam, delectus voluptas sit eos minima pariatur sunt rem nostrum accusamus.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorem dolore? Pariatur consequuntur dolores dolor obcaecati quos reprehenderit, voluptates voluptatum consequatur sunt fuga nemo atque sit ullam eaque. Minus, nemo?
              </p>
          </div>
      </motion.div>
  )
}

export default About