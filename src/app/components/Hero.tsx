import Image from "next/image"

function Hero() {
    return (
        <section
            className="container grid grid-cols-1 lg:grid-cols-12 border border-white z-20"
        >
            <div className="col-span-7 flex flex-col items-center md:items-start justify-center">
                <h1 className="text-5xl font-extrabold mb-3">
                    Hi, I'm Varun
                </h1>
                
                <p className="text-slate-400 text-lg text-center md:text-left md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores nostrum cupiditate quibusdam saepe tenetur deleniti autem molestias aspernatur nam.
                </p>
            </div>

            <div className="col-span-5 flex justify-center my-5 md:mt-0">
                <Image 
                    src="/fly-koala.jpg"
                    alt="hero avatar"
                    width={350}
                    height={350}
                    className="rounded-full shadow-[0_20px_50px_rgba(217,_70,_239,_0.7)] bg-fuchsia-500"
                />
            </div>
        </section>
    )     
}

export default Hero