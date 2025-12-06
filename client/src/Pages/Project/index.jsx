import React, { useState, useEffect } from "react";
import { menuArray, projectArray } from "./helper";

export const Project = () => {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) setSelectedTab(tab);
  }, []);

  // update URL when tab changes
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

  // filtering logic
  const filteredProjects =
    selectedTab === "All" || !selectedTab
      ? projectArray
      : projectArray.filter((p) => p.category === selectedTab.toLowerCase());
console.log(filteredProjects);
  return (
    <div className="st-portfolio--project">
      <ul className="project-menu">
        {menuArray.map((item, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(item.value)}
            className={selectedTab === item.value ? "active-tab" : ""}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="project-list">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.label}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
