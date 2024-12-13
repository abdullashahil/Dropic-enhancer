import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center fixed z-50 w-full px-6 py-5 lg:px-10 border-b border-gray-50 bg-white">
            <div className=' '>
                <Link href='/' className='flex items-center '>
                    <Image alt='logo' src='/logoWname.png'
                        width={140}
                        height={140}
                        className='max-sm:size-18'
                    />
                </Link>


            </div>

        </nav>


    )
}

export default Navbar
