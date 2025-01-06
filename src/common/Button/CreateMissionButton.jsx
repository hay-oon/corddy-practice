import "./CreateMissionButton.css";

export function CreateMissionButton({ children, setPage }) {
  const handleClick = () => {
    setPage("create-mission");
  };

  return (
    <button onClick={handleClick} className="create-mission">
      {children}
    </button>
  );
}
