import { skillCards } from "./helper";
import { SkillCard } from "./SkillCard";


export const Skill = () => {
  return (
    <div className="skills-wrapper">
      {skillCards.map((card, i) => (
        <SkillCard
          key={i} 
          front={card.front} 
          icon={card.icon} 
          back={card.back} 
        />
      ))}
    </div>
  );
};
