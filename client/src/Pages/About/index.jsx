import SeoHead from '@Component/SeoHead'

const softSkills = [
    "Clear communication",
    "Problem solving",
    "Team collaboration",
    "Adaptability",
    "Attention to detail",
    "Time management"
]

export const About = () => {
    return (
        <div className='st-portfolio--about'>
            <SeoHead
                title="About"
                description="React developer with real experience at Kodezen, practical frontend skills, soft skills, and education background."
            />

            <section className="st-portfolio--about__section st-portfolio--about__intro">
                <p className="st-portfolio--about__eyebrow">Section 1</p>
                <h2>About Me</h2>
                <div className='st-portfolio--about__paragraph'>
                    <p>
                        I'm a React developer focused on building clean, responsive, and practical web interfaces. I enjoy turning ideas into usable products with component-based architecture, thoughtful UI details, and reliable frontend logic.
                    </p>
                    <p>
                        My work is centered around React, JavaScript, Redux, API integration, and modern styling workflows. I care about writing maintainable code, improving user experience, and learning tools deeply enough to use them with confidence in real projects.
                    </p>
                </div>
            </section>

            <section className="st-portfolio--about__section">
                <div className="st-portfolio--about__section-head">
                    <p className="st-portfolio--about__eyebrow">Section 2</p>
                    <h2>Real Experience</h2>
                </div>
                <div className="st-portfolio--about__experience">
                    <div>
                        <h3>Kodezen</h3>
                        <p>React Developer</p>
                    </div>
                    <span>Dec 2024 - Present</span>
                </div>
            </section>

            <section className="st-portfolio--about__section">
                <div className="st-portfolio--about__section-head">
                    <p className="st-portfolio--about__eyebrow">Section 3</p>
                    <h2>Soft Skills</h2>
                </div>
                <div className="st-portfolio--about__skills">
                    {softSkills.map((skill) => (
                        <span key={skill}>{skill}</span>
                    ))}
                </div>
            </section>

            <section className="st-portfolio--about__section">
                <div className="st-portfolio--about__section-head">
                    <p className="st-portfolio--about__eyebrow">Section 4</p>
                    <h2>Education</h2>
                </div>
                <div className="st-portfolio--about__education">
                    <h3>Academic Background</h3>
                    <p>Focused on continuous learning, frontend development, and practical web application skills.</p>
                </div>
            </section>
        </div>
    )
}
