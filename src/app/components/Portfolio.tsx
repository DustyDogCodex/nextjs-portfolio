import Project from "./Project"
import { motion } from "framer-motion"

function Portfolio() {
    //type declarations for project component props
    type ProjectProps = { 
        title: string, 
        subtitle: string, 
        links: { 
            github: string, 
            live: string 
        }
    }

    //some random projects ad images for display
    const projects: ProjectProps[] = [
        {
            title: 'Project-1',
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim cum esse reiciendis assumenda debitis.',
            links: {
                github: '',
                live: ''
            }
        },
        {
            title: 'Project-2',
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim cum esse reiciendis assumenda debitis.',
            links: {
                github: '',
                live: ''
            }
        },
        {
            title: 'Project-3',
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim cum esse reiciendis assumenda debitis.',
            links: {
                github: '',
                live: ''
            }
        },
        {
            title: 'Project-4',
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim cum esse reiciendis assumenda debitis.',
            links: {
                github: '',
                live: ''
            }
        },
        {
            title: 'Project-5',
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim cum esse reiciendis assumenda debitis.',
            links: {
                github: '',
                live: ''
            }
        },
        {
            title: 'Project-6',
            subtitle: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim cum esse reiciendis assumenda debitis.',
            links: {
                github: '',
                live: ''
            }
        }
    ]

    const container = {
        hidden: {}, //nothing will happen when hidden
        visible: {
            //animation for each of the child components (each individual project) will happen in a staggered fashion with a 0.2 delay between each other.
            transition: { staggerChildren: 0.2 }
        }
    }

    const projectElements = projects.map((project: ProjectProps, index: number) => 
                    <Project
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        links={project.links}
                    />
                )

    return (
        <section
            id='portfolio'
            className="py-32"
        >
            <motion.div
                className="md:w-2/4 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0}
                }}
            >
                <h1 className="text-4xl font-bold mb-10 text-center">
                    My Portfolio
                </h1>            
            </motion.div>
                
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projectElements}
                </motion.div>
            </div>
        </section>
    )
}

export default Portfolio