import React from 'react';

const Faq = () => {
  return (
    <div className='w-full h-full flex items-center justify-center mt-[94rem] md:mt-[48rem] sm:mt-[22rem]'>
      <div className='max-w-6xl  text-center p-8'>
        <h2 className='text-4xl font-bold mb-8'>INNER CIRCLE TRADING CLUB FREQUENTLY ASKED QUESTIONS (FAQ)</h2>

        <div className='mb-8'>
          <h3 className='text-xl font-bold'>What is the Inner Circle Trading Club all about?</h3>
          <p className='my-4 relative'>
            <i className='fas fa-question-circle text-blue-500 text-xl absolute top-0 left-0 mt-1 ml-1'></i>
            Inner Circle Trading Club is basically a group of private investors coming together to earn passive income monthly through a sustainable and consistent financial market trading strategy/system.
          </p>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-bold'>Are there any fees associated with profit withdrawals?</h3>
          <p className='my-4 relative'>
            <i className='fas fa-question-circle text-blue-500 text-xl absolute top-0 left-0 mt-1 ml-1'></i>
            Yes, there is a withdrawal fee of 5% associated with profit withdrawals. For example, if you withdraw $300, you will receive $285 in your USDT TRC20 wallet.
          </p>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-bold'>Is there a minimum withdrawal amount?</h3>
          <p className='my-4 relative'>
            <i className='fas fa-question-circle text-blue-500 text-xl absolute top-0 left-0 mt-1 ml-1'></i>
            Yes. Since the minimum deposit is $100, the minimum withdrawal will be 30% of $100 - $30.
          </p>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-bold'>Will I get automatic withdrawals?</h3>
          <p className='my-4 relative'>
            <i className='fas fa-question-circle text-blue-500 text-xl absolute top-0 left-0 mt-1 ml-1'></i>
            Withdrawals are processed once in every 30-day cycle, and it typically takes about 24 to 48 hours for the withdrawal to be credited to the members USDT wallet.
          </p>
        </div>

        <div className='mb-8'>
          <h3 className='text-xl font-bold'>Do you have any testimonials or success stories from current or past ICTC members?</h3>
          <p className='my-4 relative'>
            <i className='fas fa-question-circle text-blue-500 text-xl absolute top-0 left-0 mt-1 ml-1'></i>
            Yes, we have a collection of testimonials and success stories from both current and past ICTC members. As part of our commitment to transparency and trust, we provide access to the trading account investors' passwords, allowing investors to see daily, weekly, and monthly updates on our trading activities. This includes the success stories of other investors who have benefited from our club. We believe in sharing real, tangible results with our community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;