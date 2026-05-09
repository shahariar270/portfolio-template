import React, { useState } from "react";
import SeoHead from "@Component/SeoHead";
import { menuArray, projectArray } from "./helper";

export const Project = () => {
  const [selectedTab, setSelectedTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("tab") || "all";
  });

  const handleTabClick = (label) => {
    setSelectedTab(label);

    const params = new URLSearchParams(window.location.search);
    params.set("tab", label);

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const filteredProjects =
    selectedTab === "all" || !selectedTab
      ? projectArray
      : projectArray.filter((p) => p.category === selectedTab.toLowerCase());
  return (
    <div className="st-portfolio--project">
      <SeoHead
        title="Projects"
        description="Selected portfolio projects spanning React apps, MERN builds, CMS work, and interactive frontend experiences."
      />
      <ul className="st-portfolio--project__tabs">
        {menuArray.map((item, index) => (
          <li
            key={index}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleTabClick(item.value);
              }
            }}
            onClick={() => handleTabClick(item.value)}
            className={
              selectedTab === item.value
                ? "st-portfolio--project__tab st-portfolio--project__tab--active"
                : "st-portfolio--project__tab"
            }
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="st-portfolio--project__grid">
        {filteredProjects.map((project, index) => (
          <article key={index} className="st-portfolio--project__card">
            <div className="st-portfolio--project__card-media">
              <img
                className="st-portfolio--project__card-img"
                src={project.image}
                alt={`${project.label} preview`}
              />
            </div>
            <div className="st-portfolio--project__card-body">
              <h3 className="st-portfolio--project__card-title">{project.label}</h3>
              <p className="st-portfolio--project__card-text">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
