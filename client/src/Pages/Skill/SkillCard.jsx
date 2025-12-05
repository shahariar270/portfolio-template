export const SkillCard = ({ front, back }) => {
  return (
    <div className="flip-card">
      <div className="flip-inner">

        <div className="flip-front">
          {front}
        </div>

        <div className="flip-back">
          {back.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

      </div>
    </div>
  );
};
