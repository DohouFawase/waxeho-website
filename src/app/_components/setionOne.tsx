import Link from 'next/link'
import React from 'react'

function SectionOne() {
    return (
        <div className="bg-black h-min-screen">
            <div className='grid md:grid-cols-2 gap-8 p-4 px-8 '>

                <div className="flex items-center w-full ">
                    <div className="max-w-full text-white">
                        <div className="backdrop-blur-sm  bg-opacity-30  ">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Bienvenu chez
                                <span className="block text-orange-400">Waxeho</span>
                            </h1>

                            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
                                Une agence de communication et marketing spécialisée en tourisme
                            </p>

                            <p className="text-base md:text-lg opacity-90 leading-relaxed">
                                Nous agissons pour le développement du secteur touristique africain.
                                Bien chez nous.
                            </p>

                            {/* Nouveau texte ajouté */}
                            <p className="text-base md:text-lg opacity-80 leading-relaxed mt-4">
                                Découvrez la modernité du tourisme africain à travers ses richesses
                                culturelles, son histoire vivante et ses ressources uniques.
                                Avec nos solutions technologiques innovantes, nous vous guidons
                                vers une nouvelle manière de voyager et d’explorer.
                            </p>

                            {/* Bouton d'appel à l'action optionnel */}
                            <div className="mt-8">
                                <Link href={'/about'} className="bg-orange-500 rounded-md hover:bg-orange-600 text-white font-semibold px-8 py-3 transition-colors duration-300 transform hover:scale-105">
                                    Qui somme nous
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className=" ">
                    <img src="/african.png" alt="/african.png" className='' />
                </div>


            </div>
        </div>
    )
}

export default SectionOne