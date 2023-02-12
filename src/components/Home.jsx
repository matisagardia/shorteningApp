import React from 'react'
import homeImg from '../assets/images/illustration-working.png'

export const Home = () => {
  return (
    <>

    <div className='flex justify-center gap-48 pt-48 ml-96'>
        <div className="homeLeft w-2/5 flex flex-col items-start gap-4">
            <h1 className="homeTitle text-VeryDarkViolet text-9xl font-bold">
                More than just shorter links
            </h1>
            <h2 className="w-2/3 homeSubtitle text-Gray text-3xl font-semibold leading-relaxed">
                Build your brand's recognition and get detailed insights on how your links are performing.
            </h2>
            <button className="getStarted w-72 h-20 bg-cyan p-4 rounded-full mt-10">
               <h3 className='text-white text-3xl font-semibold'>Get Started</h3> 
            </button>
        </div>
        <div className="homeRight">
            <img src={homeImg} alt="" />
        </div>
    </div>

    <div className='container mx-auto searchBox w-8/12 h-64 bg-DarkViolet flex justify-center items-center gap-10 relative rounded-2xl mt-20'>
        <input type="text" placeholder='Shorten a link here...' className='searchInput w-3/5 h-2/5 rounded-3xl text-3xl pl-10 font-medium'/>
        <button className='searchSubmit bg-cyan p-8 rounded-3xl text-white text-3xl font-semibold'>Shorten it!</button>
    </div>
    </>
  )
}
