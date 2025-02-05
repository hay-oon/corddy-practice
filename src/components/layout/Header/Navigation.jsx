import { useState } from "react";
import "./Navigation.css";

function NavButton({ children, isActive, onClick }) {
  return (
    <button
      className={`nav-button ${!isActive ? "inactive" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Navigation() {
  const [activeButton, setActiveButton] = useState("today");

  return (
    <div className="headerContents">
      <NavButton
        isActive={activeButton === "today"}
        onClick={() => setActiveButton("today")}
      >
        <span style={{ fontSize: "1.5em" }}>🎯</span> Today's mission
      </NavButton>

      <NavButton
        isActive={activeButton === "topic"}
        onClick={() => setActiveButton("topic")}
      >
        <span style={{ fontSize: "1.5em" }}>💡</span> Topic ideas
      </NavButton>

      <NavButton
        isActive={activeButton === "ocean"}
        onClick={() => setActiveButton("ocean")}
      >
        <span style={{ fontSize: "1.5em" }}>🌊</span> Cozy ocean
      </NavButton>

      <NavButton
        isActive={activeButton === "study"}
        onClick={() => setActiveButton("study")}
      >
        <span style={{ fontSize: "1.5em" }}>📚</span> Concepts study
      </NavButton>
    </div>
  );
}
