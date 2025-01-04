import "./NavButton.css";

export function NavButton({ children, isActive, onClick }) {
  return (
    <button
      className={`nav-button ${!isActive ? "inactive" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
