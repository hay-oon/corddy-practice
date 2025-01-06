import { Header } from "./components/layout/Header/Header";
import { Body } from "./components/layout/Body/Body";
import { Footer } from "./components/layout/Footer/Footer";
import { LevelProvider } from "./context/LevelContext";

function App() {
  return (
    <LevelProvider>
      <Header />
      <Body />
      <Footer />
    </LevelProvider>
  );
}

export default App;
