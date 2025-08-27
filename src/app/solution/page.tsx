import WorkCard from '@/components/card/Workcard'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className=" bg-blue-900 md:h-64 h-48 flex py-8 justify-center items-end">
                <div className="">
                    <h1 className='text-4xl font-black text-white'>Nos Solution</h1>
                </div>
            </div>
            <WorkCard />
        </div>
    )
}
