import React from 'react'
import image1 from '../assets/images/icon-brand-recognition.png';
import image2 from '../assets/images/icon-detailed-records.png';
import image3 from '../assets/images/icon-fully-customizable.png';

export const Description = () => {
  return (
    <>

        <div className="descriptionContainer w-full bg-slate-100 h-max relative pt-72 flex flex-col justify-center items-center">
            <div className="descriptionTitle flex flex-col items-center justify-center gap-8 w-1/4">
                <h1 className='font-bold text-5xl text-VeryDarkViolet'>
                    Advanced Statistics
                </h1>
                <h2 className='font-semibold text-2xl text-gray-400 text-center'>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </h2>
            </div>
            <div className="descriptionCards flex justify-center items-center gap-10 mt-20 pb-40">
                <div className="card1 w-1/5 h-[280px] bg-white flex flex-col gap-10 items-center rounded-2xl p-10">
                    <div className='cardCircle w-28 h-28 bg-DarkViolet rounded-full flex justify-center items-center'>
                        <img src={image1} alt="" className=''/>
                    </div>
                    <div className="cardText flex flex-col items-center gap-10 w-11/12">
                        <h2 className='font-bold text-4xl text-VeryDarkViolet'>Brand Recognition</h2>
                        <p className='text-2xl font-medium text-gray-400'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
                <div className="card2 w-1/5 h-[280px] bg-white flex flex-col gap-10 items-center rounded-2xl p-10">
                <div className='cardCircle w-28 h-28 bg-DarkViolet rounded-full flex justify-center items-center'>
                        <img src={image2} alt="" />
                    </div>
                    <div className="ardText flex flex-col items-center gap-10 w-11/12">
                    <h2 className='font-bold text-4xl text-VeryDarkViolet'>Detailed Records</h2>
                    <p className='text-2xl font-medium text-gray-400'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                <div className="card3 w-1/5 h-[280px] bg-white flex flex-col gap-10 items-center rounded-2xl p-10">
                <div className='cardCircle w-28 h-28 bg-DarkViolet rounded-full flex justify-center items-center'>
                        <img src={image3} alt="" />
                    </div>
                    <div className="ardText flex flex-col items-center gap-10 w-11/12">
                    <h2 className='font-bold text-4xl text-VeryDarkViolet'>Fully Customizable</h2>
                    <p className='text-2xl font-medium text-gray-400'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
