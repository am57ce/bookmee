import React from 'react'
import logo from '../images/logo.png'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black w-[1280px] h-[74px]">
      <div className="w-[150px] h-[37.5px] top-4 left-7  ">
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className='flex rounded-[15px] w-[841px] h-[31px]  top-[22px] left-[406px] gap-0  '>
      <ul className="flex space-x-8 list-none m-0 p-0 ">
        <li><a href="#" className="text-white text-base hover:text-orange-500">Home</a></li>
        <li><a href="#" className="text-white text-base hover:text-orange-500">Q&A</a></li>
        <li><a href="#" className="text-white text-base hover:text-orange-500">T&C</a></li>
        <li><a href="#" className="text-white text-base hover:text-orange-500">Contact</a></li>
      </ul>
      <div className=" w-[208px] h-[30px] absolute top-[23px] left-[1039px] gap-1  ">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">Live Chat</button>
        <button className="w-[94px] h-[30px] absolute top-[23px] left-[1153px] p-[15px_24px] gap-[15px] rounded-tl-[15px] rounded-tr-none rounded-bl-none rounded-br-none border-t border-l-0 border-b-0 border-r-0 ">Log In</button>
      </div>
      </div>
    </nav>
  );
};

// export default Navbar;
