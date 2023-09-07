import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

function Contact() {
    return (
        <section
            id="contact"
            className="flex items-center my-20"
        >
            <div className="w-1/2"
            >
                {/* heading and intro to section */}
                <h2 className="text-2xl font-bold">Let's Connect</h2>
                <p
                    className="text-slate-400 text-lg mt-3"
                >
                    I'm currently looking for new oppurtunities to work, learn and grow my skillset. If you'd like to hire me, collaborate on a project or buy me a slice of pizza, feel free to send me an email using the contact form. I look forward to hearing from you!
                </p>

                {/* links to socials */}
                <div className="mt-5 flex items-center gap-5">
                    <a
                        href={'https://github.com/DustyDogCodex'}
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} style={{ color:'white', height:'2rem', width:'2rem' }} />
                    </a>
                    <a
                        href={'https://twitter.com/VarunMalaviya2'}
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faTwitter} style={{ color:'skyblue', height:'2rem', width:'2rem' }} />
                    </a>
                </div>
            </div>

            {/* contact me form */}
            <div className="w-1/2">
                form
            </div>
        </section>
    )
}

export default Contact