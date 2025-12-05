export const SkillCard = ({ front, icon, back }) => {
    return (
        <div className="flip-card">
            <div className="flip-inner">

                {/* FRONT */}
                <div className="flip-front">
                    <i className={icon}></i>
                    <h3>{front}</h3>
                </div>

                {/* BACK */}
                <div className="flip-back">
                    {back.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>

            </div>
        </div>
    );
};
