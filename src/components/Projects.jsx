import React from "react";

const Projects = () => {
  return (
    <section className='border-t border-gray-300 py-8'>
      <h3 className='font-bold text-4xl text-center'>Projects:</h3>
      <div className='flex md:flex-row flex-col items-center justify-center mt-10'>
        <div className='border-gray-300 border rounded-md px-4 py-3 md:w-1/2 relative'>
          <p className='bg-green-500 absolute -top-1 -left-1 px-1 py-2'>
            Ongoing
          </p>
          <h2 className='text-3xl uppercase font-bold text-center text-purple-400'>
            Pawsitive
          </h2>
          <p className='mt-4 text-lg'>
            Pawsitive is a NFT project for making the world a better place for
            those dogs who have no one to speak for them.
          </p>
          <a
            className='mt-4 font-semibold text-red-900 block text-center'
            href='https://save-them-w1x3.vercel.app/'
            target='none'
          >
            See the project here!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
