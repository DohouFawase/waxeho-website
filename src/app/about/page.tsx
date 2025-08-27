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
            <div className="flex justify-center items-center -mt-7 px-4 md:px-12 lg:px-24">
                <div className="w-full bg-blue-500 shadow-lg rounded-lg overflow-hidden aspect-video">
                    <video
                        src="/video/presentation.mp4"
                        loop
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </div>
            </div>



            <div className="py-24">
                <div className="space-y-12">
                    {
                        About.map((about) => (
                            <>
                                <div key={about.id} className="px-4 md:px-12 lg:px-24">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                                        {/* Titre */}
                                        <p className="text-lg md:text-xl font-bold">
                                            <span className="text-neutral-600 font-medium mr-2">
                                                {about.id}
                                            </span>
                                            {about.title}
                                        </p>

                                        {/* Texte */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl md:text-2xl font-light">
                                                {about.desc}
                                            </h3>
                                            <p className="text-sm md:text-base leading-relaxed">
                                                {about.par}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>

                <div className="mt-16">
                    <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Notre expertise</h1>
                </div>
                <ServiceCard />
            </div>
        </div>
    )
}
