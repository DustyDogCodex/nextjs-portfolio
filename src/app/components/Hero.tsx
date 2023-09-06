'use client'
import { gsap } from "gsap"
import SplitType from 'split-type'

import Image from "next/image"
import { useEffect } from "react"

function Hero() {
    useEffect(() => {
        const animateText = () => {
            const subtitles = gsap.utils.toArray('p')

            //gsap timeline for animations
            const subtitleTimeline = gsap.timeline()

            subtitles.forEach(sub => {
                const mySub = new SplitType(sub)
               
                    subtitleTimeline
                    .from(mySub.chars, { 
                        opacity: 0,
                        y: 80,
                        rotateX: -90,
                        stagger: 0.2
                    }, "<")
                    .to(mySub.chars, { 
                        opacity: 1,
                        y: -80,
                        rotateX: 90,
                        stagger: 0.2
                    }, "<1")
                
            })
        }
        animateText()
    }, [])

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
                <div className="my-5">
                    <div>
                        <p className='m-0 leading-[0px] text-2xl text-center'>
                            FULL STACK ENGINEER
                        </p> 
                        <p className='m-0 leading-[0px] text-2xl text-center'>
                            WEB DEVELOPER
                        </p> 
                        <p className='m-0 leading-[0px] text-2xl text-center'>
                            PROBLEM SOLVER
                        </p> 
                        <p className='m-0 leading-[0px] text-2xl text-center text-amber-400'>
                            PIZZA LOVER
                        </p>                   
                    </div>
                </div>
                
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