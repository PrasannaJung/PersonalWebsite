import React from "react";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <h1 className='uppercase font-bold text-2xl md:text-3xl'>PrasannaJ.</h1>
      <a
        className='bg-[#4E41A0] px-2 md:px-4 py-2 rounded-sm font-semibold text-xs md:text-base'
        href=''
      >
        Work with me
      </a>
    </nav>
  );
};

export default Navbar;
