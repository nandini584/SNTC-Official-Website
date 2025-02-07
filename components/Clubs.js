import React from 'react'
import Wave from "react-wavify";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from 'react';
import Image from 'next/image'
import Assighat from '../public/assi_ghat.jpg'
const Clubs = () => {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div
      id="clubs"
      className="relative lg:top-[-25vh]
    top-[-20vh]
    "
    >
      <AnimationOnScroll
        animateIn="animate__pulse"
        afterAnimatedIn={function (visible) {
          setIsPaused(false);
          setTimeout(() => {
            setIsPaused(true);
          }, 1500);
        }}
        afterAnimatedOut={function (visible) {
          setIsPaused(true);
        }}
      ></AnimationOnScroll>
      <Wave
        fill="#2D1634"
        paused={isPaused}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.35,
          points: 3,
        }}
      />
      <div className="h-[200vh] lg:h-[180vh] relative -top-5 bg-gradient-to-b from-[#2D1634] to-[#1e0925]">
        <div
          className="
        relative md:top-[2%]
        flex lg:flex-col flex-col sm:flex-col w-[90vw]
        md:justify-around
        mx-auto
        "
        >
          <div
            className="text-[#8C50A6] text-center text-3xl font-bold lg:text-8xl md:text-5xl m-0 p-0
          py-10
          "
          >
            Our Clubs
          </div>
          <div
            className='h-[30vh] md:h-[70vh] w-90vh bg-fit bg-[url("/clubs.svg")]
          bg-no-repeat bg-center bg-contain
          '
          ></div>
          <div
            className="flex lg:flex-row
          flex-col sm:flex-col w-[90vw]
          justify-center my-10
          "
          >
            <Image className='m-auto' src={Assighat} alt="assi ghat"></Image>
            <div
              className="
            sm:w-[90vw]
            lg:w-[50vw] h-50vh font-montserrat
            text-white text-justify text-1.5xl not-italic font-light tracking-normal leading-10
             lg:text-3xl md:text-2xl m-0 p-0 px-8 mt-5
            "
            >
              The Science and Technology Council , IIT BHU comprises various
              clubs in fields such as robotics, engineering, astronomy, and
              sustainability. These clubs organize various talk shows, projects,
              workshops, and competitions to help people gain hands on
              experience in these fields. We would love if you could go through
              the list of the clubs under SNTC to discover the opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs