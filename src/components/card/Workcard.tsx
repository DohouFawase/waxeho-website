import { cards } from "@/mocks/data";

// app/page.tsx ou pages/index.tsx
export default function WorkCard() {
    return (
        <div className="py-24 px-6 sm:px-12 lg:px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center place-items-center lg:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="card relative"
                        style={{ backgroundColor: card.color }}
                    >
                        <div className="card-content">
                            <h1 className="text-sm font-bold text-white">{card.title}</h1>

                            <div className="space-y-2">
                                <p className="text-xl tracking-tight font-light text-white">
                                    {card.subtitle}
                                </p>
                                <h2 className="text-3xl font-black text-white tracking-widest">
                                    {card.heading}
                                </h2>
                            </div>

                            <div>
                                <a href={card.link} className="text-white underline">
                                    View works
                                </a>
                            </div>
                        </div>

                        {/* ✅ Image dynamique au hover */}
                        <div
                            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                            style={{
                                backgroundImage: `url(${card.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>

    );
}
