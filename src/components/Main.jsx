import React from 'react';
import { FaCheck } from 'react-icons/fa';
import tsud1 from "../assets/tusd1.jpg";
import tsud2 from "../assets/tusd2.jpg";
import tsud3 from "../assets/tusd3.jpg";
import tsud4 from "../assets/tusd5.jpg";

const Main = () => {
  return (
    <div className='w-full h-screen flex pt-[112rem] sm:pt-[48rem] justify-center items-center '>
      <div className='text-center mx-10 '>
        <h2 className='text-3xl font-bold mb-8 mx-10'>
          <span className='text-yellow-600 p-2'>JOIN THE INNER CIRCLE TRADING CLUB TODAY!!!</span> Rewrite your Financial Success Story...
        </h2>
        <h2 className='text-xl my-2 mb-6'>
          Here are some snippets from the ICTC past records
        </h2>
        <div className='flex flex-wrap justify-center items-center mx-auto'>
          <img src={tsud1} alt='tsud1' className='w-full md:w-1/2 lg:w-1/4 p-2' />
          <img src={tsud2} alt='tsud2' className='w-full md:w-1/2 lg:w-1/4 p-2' />
          <img src={tsud3} alt='tsud3' className='w-full md:w-1/2 lg:w-1/4 p-2' />
          <img src={tsud4} alt='tsud4' className='w-full md:w-1/2 lg:w-1/4 p-2' />
        </div>

        <button className='bg-yellow-600 p-6 text-xl my-8 rounded-full hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none'>
          JOIN THE ICTC MASTERY PROGRAM
        </button>

        <div>
          <h2 className='font-bold text-4xl my-8'>
            WHY SHOULD YOU JOIN ICTC?
          </h2>
    

          <p className='my-4 mx-2 text-lg'>
            In the face of economic uncertainties, inflation, and the struggle to afford basic necessities, many individuals find themselves trapped in a challenging financial landscape. The Nigerian economy, like many others, is experiencing turbulence that leaves countless people unable to meet their basic needs. But there is a beacon of hope in these trying times, and that beacon is the Inner Circle Trading Club (ICTC).
          </p>

          <ul className='list-disc list-inside text-left'>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                Economic hardships and the erosion of purchasing power have become all too common. Inflation rates are on the rise, making it increasingly difficult for families to make ends meet. The cost of living is soaring, and the average citizen is feeling the pinch.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                It is in this challenging environment that ICTC shines as a lifeline. ICTC offers a solution that empowers individuals to overcome economic adversities. By joining ICTC, you gain access to a financial opportunity that can change the trajectory of your life.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                It is in this challenging environment that ICTC shines as a lifeline. ICTC offers a solution that empowers individuals to overcome economic adversities. By joining ICTC, you gain access to a financial opportunity that can change the trajectory of your life.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                ICTC is more than just a trading club; it's a pathway to financial resilience and stability. In a time when traditional investments may not yield the expected returns, ICTC's strategy stands out. It's designed to generate consistent profits, offering its members a reliable source of income in an uncertain economic landscape.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                The beauty of ICTC is that you don't need to be a financial expert or a seasoned trader to participate.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                ICTC provides a structured system that allows individuals from all walks of life to deposit and grow their wealth. By putting your trust in the hands of experienced professionals, you can navigate the financial markets with confidence.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                The ICTC approach focuses on risk management and proven trading strategies, ensuring that your deposits are safeguarded even in volatile market conditions. This means that you can take a step towards securing your financial future without the fear of losing your hard-earned money.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                ICTC is not just a trading club; it's a community of individuals working together to combat the economic challenges that surround us. By joining ICTC, you become part of a network of like-minded people, all striving to better their financial situations.
              </p>
            </li>
            <li className='flex items-start mb-4'>
              <span className='bg-green-500 font-bold text-xl text-gray-100 p-2 rounded-md'>
                <FaCheck />
              </span>
              <p className='ml-3'>
                In these times of economic uncertainty, ICTC offers a ray of hope. It provides an opportunity for individuals to regain control of their financial destinies, secure their futures, and overcome the challenges posed by inflation and economic hardships. ICTC isn't just a way to survive; it's a way to thrive in the face of adversity.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
