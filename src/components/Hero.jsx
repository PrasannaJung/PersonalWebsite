import React from "react";
import Image from "../assets/pp.jpg";
import Typed from "react-typed";

import {
  ReactLogo,
  Python,
  JavaScript,
  Html,
  Css,
  Tailwind,
  Linkedin,
  Twitter,
  Git,
  Github,
  Bootstrap,
  Next,
} from "../utility/Images";
const Hero = () => {
  return (
    <>
      <div className='mt-24 flex flex-col-reverse md:flex-row ,justify-center md:justify-between items-center px-10 gap-10 text-center md:text-left'>
        <div>
          <h1 className='mt-4 text-2xl md:text-4xl leading-loose'>
            Hi, I am Prasanna. <br /> A {""}
            <span className='font-semibold'>
              <Typed
                strings={["frontend developer.", "Web3 learner."]}
                typeSpeed={100}
                backSpeed={100}
                loop={true}
              />
            </span>
          </h1>
          <div className='mt-10 md:w-2/3 border border-gray-200 px-4 py-4 rounded-xl'>
            <h4 className='text-2xl font-semibold'>About Myself:</h4>
            <p className='text-xl my-4'>
              I am a computer science student and I have been learning web
              development since 2021.
            </p>
            <p className=' text-xl'>
              I have also been involved in web3 development since the start of
              2022 and have been building web3 projects ever since.
            </p>
          </div>
        </div>
        <div className='md:pr-10 grid'>
          <img
            className='w-96 aspect-square object-cover rounded-[50%]'
            src={Image}
            alt=''
          />
        </div>
      </div>
      <div className='mt-16 flex justify-center flex-col items-center border-t border-gray-300 pt-8'>
        <h1 className='font-bold text-4xl'>Tech Stack: </h1>
        <div className='mt-6 max-w-3xl flex flex-wrap gap-4'>
          <div className=''>
            <img src={Html} alt='' />
          </div>
          <div>
            <img src={Css} alt='' />
          </div>
          <div className='text-3xl'>
            <img src={JavaScript} alt='' />
          </div>
          <div>
            <img src={Tailwind} alt='' />
          </div>
          <div>
            <img src={Bootstrap} alt='' />
          </div>
          <div>
            <img src={ReactLogo} alt='' />
          </div>
          <div>
            <img src={Next} alt='' />
          </div>
          <div>
            <img src={Python} alt='' />
          </div>
          <div>
            <img src={Git} alt='' />
          </div>
        </div>
      </div>
      <div className='mt-10 flex justify-center flex-col items-center border-t border-gray-300 pt-8 '>
        <h1 className='text-2xl font-bold'>Connect With Me: </h1>
        <div className='flex gap-6 items-center mt-3'>
          <a href='https://github.com/PrasannaJung'>
            <img src={Github} alt='' />
          </a>
          <a href=''>
            <img src={Twitter} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/prasanna-jung-thapa-832202216/'>
            <img src={Linkedin} alt='' />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
