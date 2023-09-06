'use client'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

function Hero() {
    return (
        <section
            id="home"
            className="grid grid-cols-1 lg:grid-cols-12 border border-white z-20"
        >
            {/* hero intro & buttons */}
            <div className="col-span-7 flex flex-col items-center lg:items-start justify-center">
                <h1 className="text-5xl font-extrabold mb-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-600">Hi, I'm</span> Varun
                </h1>

                {/* animated subtitles */}
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'FULL STACK ENGINEER',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'WEB DEVELOPER',
                        1000,
                        'PROBLEM SOLVER',
                        1000,
                        'PIZZA LOVER',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ 
                        fontSize: '1.5em', 
                        display: 'inline-block', 
                        color:'gold' 
                    }}
                    repeat={Infinity}
                />
                
                <span className="text-slate-400 text-lg text-center lg:text-left md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores nostrum cupiditate quibusdam saepe tenetur deleniti autem molestias aspernatur nam.
                </span>

                {/* buttons */}
                <div>
                    <button className="mx-2 my-5 py-2 px-5 rounded-full bg-gradient-to-r from-blue-400 via-fuchsia-400 to-violet-500 hover:scale-110 transition duration-300">
                        Hire Me
                    </button>
                    <button className="mx-2 my-5 py-2 px-5 rounded-full bg-gradient-to-r from-blue-400 via-fuchsia-400 to-violet-500 hover:scale-110 transition duration-300">
                        Download Resume
                    </button>
                </div>
            </div>

            {/* hero image */}
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