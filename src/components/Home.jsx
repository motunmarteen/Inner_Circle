import React from 'react';

const Home = () => {
  return (
    <div className='w-full pt-8 md:pt-28 h-full mx-auto justify-center bg-gray-300 max'>
      <div className='max-w-6xl  text-center text-black md:flex grid md:grid-cols-3 gap-8 mx-auto p-4 md:p-8'>
        <div className='md:w-full'>
          <h2 className='text-3xl font-bold mb-4 mx-2'>
            WHAT IS IT?
          </h2>
          <p className='my-4 mx-2 text-sm'>
            Inner Circle Trading Club (ICTC) is a Private Trading Club focused on providing individuals with the opportunity to make additional income without the need for active trading or in-depth knowledge of the financial markets. Members of ICTC can deposit their funds, and professional traders handle the trading activities and generate profits for all its members daily, weekly, and monthly. It's a hassle-free way for individuals to grow their wealth through financial market trading strategies.
          </p>
        </div>
        <div className='md:w-full'>
          <h2 className='text-3xl font-bold mb-4 mx-2'>
            WHO IS IT FOR?
          </h2>
          <p className='my-4 mx-2 text-sm'>
            ICTC is for individuals who are looking for a passive income opportunity without the need to actively trade in the financial markets themselves. It's suitable for people who want to grow their wealth by becoming members of the club and having professional traders handle the trading activities on their behalf. This opportunity is for those who may not have the time, expertise, or interest in actively managing their trades themselves but still want to benefit from financial market trading strategies. It provides a convenient and hands-off approach to income generation for a wide range of individuals.
          </p>
        </div>
        <div className='md:w-full'>
          <h2 className='text-3xl font-bold mb-4 mx-2'>
            HOW DOES IT WORK?
          </h2>
          <p className='my-4 mx-2 text-sm'>
            ICTC allows its members to deposit a minimum of $100 (with a 5% deposit fee) or a maximum of $10,000 (with a 5% deposit fee) into the club's trading account. Professional traders manage the deposits, aiming for a 30% profit over a 30-day cycle. Depositors can track the trading in real-time using an investor's password. All profits are withdrawn at the end of each 30-day cycle, regardless of when the deposits were made. It's a transparent and hands-free passive income opportunity for individuals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;