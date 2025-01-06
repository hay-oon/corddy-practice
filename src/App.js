import { Header } from "./components/layout/Header/Header";
import { Main } from "./Pages/Main";
import { CreateMission } from "./Pages/CreateMission";
import { Footer } from "./components/layout/Footer/Footer";
import { LevelProvider } from "./context/LevelContext";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  return (
    <LevelProvider>
      <Header />
      {currentPage === "main" ? (
        <Main setPage={setCurrentPage} />
      ) : (
        <CreateMission setPage={setCurrentPage} />
      )}
      <Footer />
    </LevelProvider>
  );
}

export default App;
