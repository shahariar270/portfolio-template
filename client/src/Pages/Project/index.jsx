import React, { useState, useEffect } from "react";
import { menuArray } from "./helper";

export const Project = () => {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) setSelectedTab(tab);
  }, []);

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
    </div>
  );
};