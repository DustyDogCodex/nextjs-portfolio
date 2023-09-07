import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Contact() {
    return (
        <section
            id="contact"
            className="flex flex-col md:flex-row items-center my-10 py-20 md:py-32 px-4 relative"
        >
            {/* blurred blue circle effect in the background */}
            <div className="bg-blurred-circle from-primary-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-0 -left-4 transform -translate-x-1/2 -translate-1/2" />

            <div className="w-full md:w-1/2 z-40"
            >
                {/* heading and intro to section */}
                <h2 className="text-2xl font-bold text-center md:text-left">{"Let's Connect"}</h2>
                <p
                    className="text-slate-400 text-lg mt-3 text-center md:text-left"
                >
                    {"I'm currently looking for new oppurtunities to work, learn and grow my skillset. If you'd like to hire me, collaborate on a project or buy me a slice of pizza, feel free to send me an email using the contact form. I look forward to hearing from you!"}
                </p>

                {/* links to socials */}
                <div className="mt-5 flex items-center justify-center md:justify-start gap-5">
                    <a
                        href='https://github.com/DustyDogCodex'
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} style={{ color:'white', height:'2rem', width:'2rem' }} />
                    </a>
                    <a
                        href='https://twitter.com/VarunMalaviya2'
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faTwitter} style={{ color:'skyblue', height:'2rem', width:'2rem' }} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/varun-malaviya-012677108/'
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} style={{ color:'limegreen', height:'2rem', width:'2rem' }} />
                    </a>
                </div>
            </div>

            {/* contact me form */}
            <div className="w-full md:w-1/2 px-0 md:px-5 mt-5 md:mt-0">
                <form action="https://formsubmit.co/280e83d4b1c4a5bbf549d02633e4c5fa" method="POST" className="flex flex-col gap-4">
                    <input 
                        type="email" 
                        id="email"
                        required
                        placeholder="Your email address"
                        className="p-2 rounded-xl bg-slate-800 text-white placeholder-slate-400"    
                    />
                    <input 
                        type="text" 
                        id="subject"
                        required
                        placeholder="Subject"    
                        className="p-2 rounded-xl bg-slate-800 text-white placeholder-slate-400" 
                    />
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder="Connect with me by sending me a message!"
                        rows={6}
                        required
                        className="p-2 rounded-xl bg-slate-800 text-white placeholder-slate-400"  
                    />
                    <div
                        className="w-full flex items-center justify-center"
                    >
                        <button
                            type="submit"
                            className="bg-fuchsia-600 py-2 px-5 text-lg w-fit rounded-xl hover:scale-110 transition duration-300"
                        >
                            Send Message!
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact