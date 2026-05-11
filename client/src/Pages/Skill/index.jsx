import { skillCategories } from "./helper";
import SeoHead from "@Component/SeoHead";
import { SkillCard } from "./SkillCard";

export const Skill = () => {
  return (
    <div className="skills-wrapper">
      <SeoHead
        title="Skills"
        description="Technical skills across React, JavaScript, MERN tooling, responsive UI, state management, and full-stack development."
      />

      {skillCategories.map((category) => (
        <div
          key={category.id}
          className={`skill-category skill-category--${category.id}`}
        >
          <div className="skill-category__header">
            <span className="skill-category__dot"></span>
            <h2 className="skill-category__label">{category.label}</h2>
            <span className="skill-category__count">
              {category.cards.length} skills
            </span>
          </div>

          <div className="skill-category__grid">
            {category.cards.map((card, i) => (
              <SkillCard
                key={i}
                front={card.front}
                badge={card.badge}
                logo={card.logo}
                back={card.back}
                categoryId={category.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
