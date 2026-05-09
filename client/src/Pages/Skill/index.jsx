import { skillCards } from "./helper";
import { SkillCard } from "./SkillCard";
import SeoHead from "@Component/SeoHead";


export const Skill = () => {
  return (
    <div className="skills-wrapper">
      <SeoHead
        title="Skills"
        description="Technical skills across React, JavaScript, MERN tooling, responsive UI, state management, and full-stack development."
      />
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
