import SeoHead from '@Component/SeoHead'

const experienceItems = [
    {
        title: "Team Lead",
        company: "Kodezen",
        period: "Dec 2024 - Present",
        points: [
            "Led development on a CRM plugin, coordinating implementation decisions and keeping the team focused on practical, maintainable delivery.",
            "Architected React-driven interfaces and optimized frontend workflows for cleaner state, smoother interactions, and better long-term scalability.",
            "Managed task breakdowns, reviewed code quality, and supported developers through technical blockers."
        ]
    },
    {
        title: "MERN Expense Tracker",
        company: "Full-Stack Project",
        period: "Project",
        points: [
            "Built a MERN application for tracking expenses with structured data handling, reusable UI components, and practical dashboard flows.",
            "Optimized the app experience around clear inputs, readable summaries, and reliable CRUD behavior."
        ]
    },
    {
        title: "YouTube Video Downloader",
        company: "Utility Project",
        period: "Project",
        points: [
            "Developed a focused download utility with attention to usability, API handling, and efficient frontend feedback states."
        ]
    }
]

const educationItems = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        status: "Currently pursuing"
    },
    {
        degree: "Diploma in Computer Engineering",
        status: "Completed"
    }
]

export const About = () => {
    return (
        <div className='st-portfolio--about'>
            <SeoHead
                title="About"
                description="Full-stack developer specializing in MERN stack, WordPress, clean code, leadership, and solution-oriented web development."
            />

            <section className="st-portfolio--about__section st-portfolio--about__intro">
                <p className="st-portfolio--about__eyebrow">Profile</p>
                <h2>About Me</h2>
                <div className='st-portfolio--about__paragraph'>
                    <p>
                        I'm a solution-oriented Full-Stack Developer specializing in the MERN stack and WordPress, with a strong focus on clean code, scalable architecture, and practical problem-solving. Currently working as a Team Lead at a software firm, I help guide development on a CRM plugin while balancing hands-on coding, team coordination, and product thinking. I enjoy turning complex requirements into smooth, maintainable web experiences using React.js, Next.js, Node.js, MongoDB, Tailwind CSS, and modern AI-assisted workflows.
                    </p>
                </div>
            </section>

            <section className="st-portfolio--about__section">
                <div className="st-portfolio--about__section-head">
                    <p className="st-portfolio--about__eyebrow">Timeline</p>
                    <h2>Real Experience</h2>
                </div>
                <div className="st-portfolio--about__timeline">
                    {experienceItems.map((item) => (
                        <article className="st-portfolio--about__experience" key={item.title}>
                            <div className="st-portfolio--about__experience-head">
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.company}</p>
                                </div>
                                <span>{item.period}</span>
                            </div>
                            <ul>
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="st-portfolio--about__section">
                <div className="st-portfolio--about__section-head">
                    <p className="st-portfolio--about__eyebrow">Background</p>
                    <h2>Education</h2>
                </div>
                <div className="st-portfolio--about__education-list">
                    {educationItems.map((item) => (
                        <div className="st-portfolio--about__education" key={item.degree}>
                            <h3>{item.degree}</h3>
                            <p>{item.status}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
