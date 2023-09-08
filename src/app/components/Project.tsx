import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

type ProjectProps = {
    title: string,
    subtitle: string,
    links: { github: string, live: string }
}

function Project({ title, subtitle, links }: ProjectProps) {
    //lowercasing project titles to reference project screenshots.
    const projectTitle = title.split(" ").join("-").toLowerCase()

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
            }}
            className="relative"
        >
            <div
                className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 z-30 flex bg-slate-400/70 flex-col justify-center items-center text-center p-5 text-deep-blue"
            >
                <p 
                    className="text-lg md:text-2xl font-roboto"
                >
                    {title}
                </p>
                <p className="mt-2 text-sm sm:text-base">
                    {subtitle}
                </p>

                {/* github and live demo links for project */}
                <div
                    className="flex items-center mt-2"
                >
                    <a href={`${links.github}`} target="_blank">
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            style={{
                                color: "white", 
                                height:'25px', 
                                width:'25px'
                            }} 
                        />
                    </a>

                    <a href={`${links.live}`} target="_blank">
                        <FontAwesomeIcon 
                            icon={faArrowUpRightFromSquare} 
                            style={{
                                color: "white", 
                                marginLeft:'15px', 
                                height:'22px', 
                                width:'22px'
                            }} 
                        />
                    </a>
                </div>
            </div>

            {/* project screenshot */}
            <img 
                className="w-full h-full object-cover"
                src={`./projects/${projectTitle}.jpeg`}
                alt={`${projectTitle} screenshot`} 
            />
        </motion.div>
    )
}

export default Project