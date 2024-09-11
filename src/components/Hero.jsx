import React from "react";

export const Hero = () => {
  return (
    <>
      {/* <div className='main-text'>
<h2 className="text-2xl font-bold mb-4 text-gray-800">Your Ride At One Call</h2>
        <h3 className="text-xl mb-4 text-gray-600">ALL IN ONE TRAVEL SOLUTIONS</h3>
        
</div>
     */}
      <section className="relative bg-gray-100">
        
        <div className="absolute inset-0 bg-black opacity-50">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl w-[492px] h-[69px] t-[336px] left-[389px] font-poppins font-semibold size-11 leading-[69] bg-[#FFCA09] shadow-[2px_5px_4.8px_0px_#00000070]">
            Your Ride At One Call
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 w-[477px] h-[36px] top-[407px] left-[369px] leading-9 font-inter text-left font-medium shadow-custom ">
            ALL IN ONE TRAVEL SOLUTIONS
          </p>
        </div>
        </div>
     
      </section>
    </>
  );
};
