// import "./SkillCard.css";

export const SkillCard = ({ front, icon, back, categoryId }) => {
    return (
        <div className={`flip-card flip-card--${categoryId}`}>
            <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-front">
                    <span className={`st-icon st-icon--${icon}`}></span>
                    <h3>{front}</h3>
                </div>
                {/* BACK */}
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