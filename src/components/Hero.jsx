import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white bg-[#030355] min-w-full min-h-screen grid items-center justify-center'>
      <div className='max-w-4xl mx-auto px-4 text-center justify-center grid'>
        <Typed strings={['Your Earning Path to Endless']} className='md:text-5xl text-3xl font-bold' typeSpeed={40} />
      
        <Typed
          strings={[
            'Growth',
            'Opportunity',
            'Abundance',
            'Success',
            'Joy',
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text"
           className='ml-[30%] sm:ml-0 bg-transparent md:text-5xl text-3xl font-bold text-white  outline-none cursor-none mt-4 ' style={{ pointerEvents: 'none' }} />
        </Typed>
        <p className='mt-8 mx-10 sm:mx-0 '>We help you unlock prosperity by helping you achieve up <br/> to 30%  monthly return lifting no finger.</p>
      <button className='text-white bg-yellow-500 p-4 mt-4 w-[60%] ml-[20%] cursor-pointer hover:bg-yellow-400'>Click to make 30% monthly</button>
      </div>
    </div>
  );
};

export default Hero;
