import React from 'react'

export const NavBar = () => {



  return (
    <nav className='navbar w-screen flex justify-around items-center pt-12'>
        <div className="leftSide flex gap-24">
            <div className="logo">
                <h1 className='text-6xl font-bold'>Shortly</h1>
            </div>
            <div className="leftSideSections flex items-center">
                <ul className='flex items-center gap-12 text-4xl font-semibold text-gray-400'>
                    <li className='cursor-pointer'>Features</li>
                    <li className='cursor-pointer'>Pricing</li>
                    <li className='cursor-pointer'>Resources</li>
                </ul>
            </div>
        </div>
        <div className="rightSide">
            <div className="buttonsRightSide flex items-center gap-12 text-2xl font-semibold">
                <button className='loginButton'>
                    <h3 className='text-gray-400'>Login</h3>
                </button>
                <button className="registerButton w-40 bg-cyan p-4 rounded-full">
                    <h3 className='text-white'>Sign Up</h3>
                </button>
            </div>
        </div>
    </nav>
  )
}
