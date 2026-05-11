import SeoHead from '@Component/SeoHead'

const experienceItems = [
    {
        title: "React Developer",
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
            "Track every expense effortlessly with each transaction, making it easy to manage and monitor your spending. Generate clear monthly reports and analyze your finances with detailed, category-wise breakdowns for better financial control.",
            "Built a MERN application for tracking expenses with structured data handling, reusable UI components, and practical dashboard flows.",
            "Optimized the app experience around clear inputs, readable summaries, and reliable CRUD behavior."
        ]
    },
    {
        title: "E-commerce system",
        company: "Full-Stack Project",
        period: "Project",
        points: [
            "Developed a full-featured e-commerce platform with product listing, search, filtering, and category-based navigation for a seamless shopping experience.",
            "Implemented secure user authentication, cart management, and order processing using the MERN stack with efficient state and API handling.",
            "Built an admin dashboard to manage products, orders, and users, with optimized CRUD operations and responsive UI for smooth performance."
        ]
    },
    {
        title: "YouTube Video Downloader",
        company: "Utility Project",
        period: "Project",
        points: [
            "Fetch api from rapid api on real time data",
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
                        I build scalable, high-performance web solutions with a strong emphasis on efficiency and clean architecture. As a MERN Stack specialist and WordPress expert, I guide a development team, driving both technical direction and delivery.
                        <br /> Beyond coding, I design and architect full-stack systems using Next.js, MongoDB, and Tailwind CSS, while integrating AI-driven workflows to improve productivity and innovation. From system design to sprint execution, I focus on delivering reliable, maintainable, and high-impact digital products.
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
