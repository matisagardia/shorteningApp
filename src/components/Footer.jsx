import React from 'react'
import fb from '../assets/images/fb.png';
import tw from '../assets/images/twitter.png';
import pi from '../assets/images/pinterest.png';
import ig from '../assets/images/instagram.png';


export const Footer = () => {
  return (
    <>

        <div className="footerTop bg-DarkViolet flex flex-col items-center pt-32 pb-32">
            <h1 className='text-white font-semibold text-6xl'>
                Boost your links today
            </h1>
            <button className="getStarted w-72 h-20 bg-cyan p-4 rounded-full mt-10">
                <h3 className='text-white text-3xl font-semibold'>Get Started</h3> 
            </button>
        </div>
        <div className="bg-VeryDarkViolet footerBottom flex justify-evenly pt-40 pb-20">
            <div className="footerBrand flex flex-col gap-10">
                <h3 className='text-white text-6xl font-semibold'>Shortly</h3> 
                <p className='text-white text-xl font-thin'>© 2023 - Developed by Matias Sagardia</p>
            </div>
            <div className="footerSections flex gap-28">
                <div className="section1 flex flex-col gap-3">
                    <h2 className='text-white text-3xl'>Features</h2>
                    <p className='text-Gray text-2xl'>Link Shortening</p>
                    <p className='text-Gray text-2xl'>Branded Links</p>
                    <p className='text-Gray text-2xl'>Analytics</p>
                </div>
                <div className="section2 flex flex-col gap-3">
                    <h2 className='text-white text-3xl'>Resources</h2>
                    <p className='text-Gray text-2xl'>Blog</p>
                    <p className='text-Gray text-2xl'>Developers</p>
                    <p className='text-Gray text-2xl'>Support</p>
                </div>
                <div className="section3 flex flex-col gap-3">
                    <h2 className='text-white text-3xl'>Company</h2>
                    <p className='text-Gray text-2xl'>About</p>
                    <p className='text-Gray text-2xl'>Our Team</p>
                    <p className='text-Gray text-2xl'>Careers</p>
                    <p className='text-Gray text-2xl'>Contact</p>
                </div>
            </div>
            <div className="footerIcons flex gap-5 h-12">
                <img src={fb} alt="facebookIcon" />
                <img src={tw} alt="twitterIcon" />
                <img src={pi} alt="pinterestIcon" />
                <img src={ig} alt="instagramIcon" />
            </div>
        </div>

    </>
  )
}
