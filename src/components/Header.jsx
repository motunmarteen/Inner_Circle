import React from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the checkmark icon from react-icons

const Header = () => {
  return (
    <div className='w-full h-screen my-[10rem] md:my-[4rem] flex flex-col justify-center items-center'>
      <div className='my-12 p-4 mx-auto text-center'>
        <h1 className='text-blue-700 text-2xl sm:text-4xl bg-yellow-400 font-bold p-4'>
          NOTE: THIS TRAINING IS ONLY FOR SERIOUS TRADERS!!
        </h1>
        <h1 className='text-xl sm:text-3xl p-4 text-black/75'>
        AT LAST! A RELIABLE ONLINE INCOME OPPORTUNITY FOR EVERYBODY. </h1>
        <p className='text-blue-400'>
        You Can Now Earn Steadily And Consistently Every Month With Your Money Directly In Your Control.
        </p>
      </div>
      <div className='grid sm:grid-cols-2'>
        {/* Embed YouTube video */}
        <div className='p-4 max-w-full aspect-w-16 aspect-h-9'>
          <iframe
            className='w-full h-full border-blue-600'
            src="https://www.youtube.com/embed/XxtfwsN5TEw"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className='mb-4 p-4'>
          <h2 className='text-2xl font-bold'>What you'll learn by the end of this course:</h2>
          <ul className='list-disc list-inside'>
            <li className='flex items-center'>
              <span className='text-green-500 font-bold text-xl bg-gray-100 p-2 rounded-full'>
                <FaCheck />
              </span>
              <div className='w-6 h-6 bg-white rounded-full ml-3'></div>
              Passive Investment with Steady Income
            </li>
            <li className='flex items-center'>
              <span className='text-green-500 font-bold text-xl bg-gray-100 p-2 rounded-full'>
                <FaCheck />
              </span>
              <div className='w-6 h-6 bg-white rounded-full ml-3'></div>
              Minimal Involvement Required
            </li>
            <li className='flex items-center'>
              <span className='text-green-500 font-bold text-xl bg-gray-100 p-2 rounded-full'>
                <FaCheck />
              </span>
              <div className='w-6 h-6 rounded-full ml-3'></div>
              Profitable Financial Market Participation
            </li>
            <li className='flex items-center'>
              <span className='text-green-500 font-bold text-xl bg-gray-100 p-2 rounded-full'>
                <FaCheck />
              </span>
              <div className='w-6 h-6  ml-3'></div>
              Proper Trading Psychology.
            </li>
            <li className='flex items-center'>
              <span className='text-green-500 font-bold text-xl bg-gray-100 p-2 rounded-full'>
                <FaCheck />
              </span>
              <div className='w-6 h-6 bg-white rounded-full ml-3'></div>
              Hassle-Free Earnings
            </li>
          </ul>
        </div>
        <div className='my-8 flex justify-center items-center mx-auto'>
          <button className='bg-yellow-600 p-6 text-xl sm:hidden'>Buy Now $99 USD</button>
        </div>
      </div>
    </div>
  );
}

export default Header;



