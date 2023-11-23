import React from 'react';

const Offerings = () => {
  return (
    <div className='text-[#030355] mt-[-12rem] bg-white min-h-screen w-full flex items-center justify-center'>
      <div className='max-w-full mx-auto px-4 text-center'>
        <h1 className='text-3xl sm:text-6xl'>Our Offerings</h1>
        <div className='grid md:flex justify-center md:space-x-6 space-y-4 mt-8'>
          {/* Box 1 */}
          <div
            className='group max-w-4xl h-full cursor-pointer bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:rotate-y-180 hover:bg-blue-500 overflow-hidden'
            style={{ animationName: 'scroll', animationDuration: '1s' }}
          >
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <h2 className='group-hover:hidden'>Front Text 1</h2>
              <p className='hidden group-hover:flex'>Back Text 1</p>
            </div>
          </div>
 
          {/* Box 2 */}
          <div
            className='group w-48 h-48 cursor-pointer bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:rotate-y-180 hover:bg-blue-500 overflow-hidden'
            style={{ animationName: 'scroll', animationDuration: '1s' }}
          >
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <h2 className='group-hover:hidden'>Front Text 2</h2>
              <p className='hidden group-hover:flex'>Back Text 2</p>
            </div>
          </div>

          {/* Box 3 */}
          <div
            className='group w-48 h-48 cursor-pointer bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:rotate-y-180 hover:bg-blue-500 overflow-hidden'
            style={{ animationName: 'scroll', animationDuration: '1s' }}
          >
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <h2 className='group-hover:hidden'>Front Text 3</h2>
              <p className='hidden group-hover:flex'>Back Text 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
