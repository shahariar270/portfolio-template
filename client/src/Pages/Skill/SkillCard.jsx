import { useState } from "react";

export const SkillCard = ({ front, badge, logo, back, categoryId }) => {
    const [logoFailed, setLogoFailed] = useState(false);

    return (
        <div className={`flip-card flip-card--${categoryId}`} tabIndex="0">
            <div className="flip-inner">
                <div className="flip-front">
                    {logo && !logoFailed ? (
                        <img
                            className="skill-logo"
                            src={logo}
                            alt={`${front} logo`}
                            onError={() => setLogoFailed(true)}
                        />
                    ) : (
                        <span className="skill-badge">{badge || front.slice(0, 2)}</span>
                    )}
                    <h3>{front}</h3>
                </div>
                <div className="flip-back">
                    <p className="flip-back__title">{front}</p>
                    {back.map((item, i) => (
                        <p key={i} className="flip-back__item">{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
