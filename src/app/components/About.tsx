import Image from "next/image"
import { useState } from 'react'

function About() {
    //variable for conditionally styling tab currently selected by user
    const [ activeTab, setActiveTab ] = useState<string>('Skills')

    const tabs: string[] = [
        'Skills',
        'Education',
        'Experience'
    ]

    //function to link tabs to appropriate content in tabInfo
    type getInfoType = (tab: string) => number
    const getInfo: getInfoType = (tab) => {
        switch (tab){
            case 'Skills':
                return 0
            case 'Education':
                return 1
            case 'Experience':
                return 2
            default:
                return 0
        }
    }

    //information for each tab
    const tabInfo: string[][] = [
        [
            'Skill A',
            'Skill B',
            'Skill C',
            'Skill D',
            'Skill E',
        ],
        [
            'Prestigious University',
            'Even More Prestigious University',
            'OMG you went to XYZ??'
        ],
        [
            'Time Person of the Year 2006'
        ]
    ]

    return (
        <section
            id="about"
            className="my-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 border border-white"
        >
            <Image 
                src="/about-me.jpg"
                alt="THE GREATEST STUDENT IN THE HISTORY OF STUDYING"
                width={360}
                height={400}
                className="w-full md:w-1/2 h-96 rounded-lg"
            />

            {/* about me heading/para and tabs */}
            <div
                className="h-80 md:h-96 text-center my-5 md:my-0 md:text-left"
            >
                <h1 className="text-4xl font-bold mb-3">About Me</h1>
                <p className="text-slate-400 text-base lg:text-lg p-2 md:p-0 text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quae molestiae cumque dolor necessitatibus fugit. Incidunt velit autem labore aspernatur hic. Temporibus, alias incidunt. Recusandae quia cum quae veniam culpa?
                </p>

                {/* tabs */}
                <div className="flex items-center justify-center md:justify-start mt-5 gap-5">
                    {tabs.map((tab,index) => 
                        <span 
                            key={index}
                            className={`${activeTab === tab ? 'text-white font-bold border-b-2 border-fuchsia-500' : 'text-slate-400 border-none'} cursor-pointer hover:text-white transition duration-300`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>    
                    )}
                </div>

                <div
                    className="flex flex-col text-slate-400 my-3"
                >
                    {tabInfo[getInfo(activeTab)].map((el: string, index: number) => <span key={index}>{el}</span>)}
                </div>
            </div>
        </section>
    )
}

export default About