import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function ThxPage() {

    const { setThxPage, thxPage } = useContext(AppContext)
    return (
        <>
            <div className='grid place-content-center w-full bg-Dark-Slate-Grey min-h-screen'>
                <div className='bg-white w-full lg:w-1/2 lg:px-14 lg:py-10 rounded-2xl text-Dark-Slate-Grey flex flex-col gap-5 m-auto p-6'>
                    <i className="ri-checkbox-circle-fill mr-3 text-Tomato text-5xl"></i>
                    <h1 className='text-5xl'>Thanks for subscribing!</h1>
                    <p className='text-sm '>A confirmation email has been sent to <span className='font-bold'>ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription.</p>
                    <button onClick={() => { setThxPage(!thxPage) }} className='w-full bg-Dark-Slate-Grey text-white p-3 rounded-md buttonHover' >Dismiss message</button>
                </div>
            </div>
        </>
    )
}
