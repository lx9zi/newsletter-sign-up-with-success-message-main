import React from 'react'
import deskImage from '../images/illustration-sign-up-desktop.svg'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function MainPage() {

    const { emailError, check, setEmail } = useContext(AppContext)
    return (
        <>
            <div className='grid place-content-center w-full bg-Dark-Slate-Grey min-h-screen'>
                <div className='bg-white lg:max-w-3xl flex flex-col-reverse p-3 rounded-3xl text-Dark-Slate-Grey lg:flex-row font-medium'>
                    <div className="left flex flex-col lg:m-9 m-2">
                        <h1 className='font-bold text-5xl'>Stay upldated!</h1>
                        <p className='py-5 font-normal w-3/2'>Join 60,000+ product managers recieving monthly upldates on:</p>

                        <span ><i className="ri-checkbox-circle-fill mr-3 text-Tomato"></i>Product discovery and building what matters</span>
                        <span ><i className="ri-checkbox-circle-fill mr-3 text-Tomato"></i>Measuring to ensure updates are a success</span>
                        <span ><i className="ri-checkbox-circle-fill mr-3 text-Tomato"></i>And much more!</span>


                        <div className="email pt-5">
                            <div className="valid-sec flex justify-between items-center">
                                <h4 className='text-sm '>Email address</h4>
                                <span className={emailError === true ? "text-red-700 text-sm" : "text-red-700 hidden"}>Valid email require</span>
                            </div>
                            <input type="text" name="" id="" placeholder='email@company.com' className={emailError === true ? 'rounded-md w-full p-3 my-2 border border-red-700 bg-opacity-30 bg-red-400 outline-none cursor-pointer text-md' : 'rounded-md w-full p-3 my-2 border-2 border-Grey outline-none  cursor-pointer text-md'} onChange={(e) => { setEmail(e.target.value) }} />
                            <button onClick={check} className='w-full mt-3 bg-Dark-Slate-Grey text-white p-3 rounded-md font-normal buttonHover'>Subscribe to monthly newsletter</button>
                        </div>
                    </div>

                    <div >
                        <img src={deskImage} alt="" className=' object-cover w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}
