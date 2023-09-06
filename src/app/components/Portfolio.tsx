import Project from "./Project"

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

    return (
        <section
            id='portfolio'
        >
            <h1 className="text-4xl font-bold mb-3">My Portfolio</h1>
            <div
                className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2"
            >
                {projects.map((project: ProjectProps, index: number) => 
                    <Project
                        key={index}
                        title={project.title}
                        subtitle={project.subtitle}
                        links={project.links}
                    />
                )}
            </div>
        </section>
    )
}

export default Portfolio