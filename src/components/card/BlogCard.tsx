import { expertisme } from "@/mocks/data";


export default function ServiceCard() {

    return (
        <div className="py-24 px-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {expertisme.map((exp) => (
                    <div
                        key={exp.id}
                        className="h-64 w-auto rounded-lg shadow p-4"
                        style={{
                            backgroundImage: `url(${exp.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}

                    >
                        <div className="space-y-4">
                            <h1 className="text-lg font-bold ">{exp.title}</h1>

                            <div className="space-y-2">
                                <p className="text-xl tracking-tight font-light ">
                                    {exp.desc}
                                </p>

                            </div>

                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
}
