// import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "Dropic",
    description: "Image enhancer",
    icons: {
        icon: '/logo.png'
    }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative '>
            <Navbar />
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 border bg-white'>
                <div className='w-full'>
                    {children}
                </div>
            </section>

        </main>
    )
}

export default HomeLayout