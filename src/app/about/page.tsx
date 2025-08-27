import ServiceCard from '@/components/card/ServiceCard'
import { About } from '@/mocks/data'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className=" bg-red-300  md:h-64 h-48  py-8 flex justify-center items-center">
                <div className="">
                    <h1 className='text-4xl font-bold text-white'>A propos</h1>
                </div>
            </div>
            <div className="flex justify-center items-center -mt-7 px-44 ">
                <div className="w-full  bg-blue-500 shadow-lg">

                    <video src="/video/presentation.mp4" loop autoPlay></video>
                </div>

            </div>



            <div className="py-24">
                <div className="space-y-12">
                    {
                        About.map((about) => (
                            <>
                                <div className="px-24" key={about.id}>
                                    <div className="grid grid-cols-2">
                                        <p className='text-xl font-bold'>
                                            <span className='text-neutral-600 font-medium'>{about.id}  </span>
                                            {about.title}
                                        </p>
                                        <div className="space-y-4">
                                            <h3 className='text-2xl font-light'>{about.desc}</h3>
                                            <p>{about.par}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>

                <div className="">
                    <h1>Notre expertisme</h1>
                </div>
                <ServiceCard />
            </div>
        </div>
    )
}
