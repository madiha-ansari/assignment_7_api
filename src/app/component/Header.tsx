"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {

    const router = useRouter()

    // client side 
    const client = () => {
        router.push("/clientside")
    }

    // server side
    const server = () => {
        router.push("/serverside")
    }

    return (
        // main div
        <div>
            {/*main heading  */}
            <h6 className='text-center text-5xl text-black underline'><q>Data Fetching </q> </h6>
            <br /><br />
            {/* div open */}
            <div className='w-full flex max:flex-col max:item-center flex-row items-center justify-center gap-4 px-1 sm:px-10 pt-8'>
                <button className='w-[180px] h-[50px] rounded-[10px] text-[18px] sm:text-[16px] p-2 bg-violet-600 text-white' onClick={client}>Client Side</button>
                <button className='w-[180px] h-[50px] rounded-[10px] text-[18px] sm:text-[16px] p-2 bg-violet-600 text-white' onClick={server}>Server Side </button>
            </div>
            {/* div close  */}
        </div>
    )
}

export default Header
