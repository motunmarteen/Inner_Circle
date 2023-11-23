import React from 'react';

const Offerings = () => {
  return (
    <div className='w-screen h-full py-10 bg-gray-300 text-[#030355]'>
      <div className='max-w-full max-h-full mx-auto px-20'>
        <h1 className='text-3xl grid sm:text-6xl text-center mb-8'>Our Offerings</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {/* Box 1 */}
          <div className='group bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:rotate-y-180 hover:bg-blue-500 overflow-hidden h-[500px]'>
            <div className='w-full h-full shadow-xl rounded-lg p-4 hover:scale-105 duration-300'>
              <h2 className='group-hover:hidden text-2xl md:text-4xl'>Front Text 1</h2>
              <p className='hidden group-hover:flex text-lg md:text-xl'>Back Text 1</p>
            </div>
          </div>
 
          {/* Box 2 */}
          <div className='group bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:rotate-y-180 hover:bg-blue-500 overflow-hidden h-[500px]'>
            <div className='w-full shadow-xl rounded-lg p-4 hover:scale-105 duration-300'>
              <h2 className='group-hover:hidden text-2xl md:text-4xl'>Front Text 2</h2>
              <p className='hidden group-hover:flex text-lg md:text-xl'>Back Text 2</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className='group bg-white rounded-lg shadow-md transform transition duration-500 ease-in-out hover:rotate-y-180 hover:bg-blue-500 overflow-hidden h-[500px]'>
            <div className='w-full shadow-xl rounded-lg p-4 hover:scale-105 duration-300'>
              <h2 className='group-hover:hidden text-2xl md:text-4xl'>Front Text 3</h2>
              <p className='hidden group-hover:flex text-lg md:text-xl'>Back Text 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
