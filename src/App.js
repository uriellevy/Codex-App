import "./App.css";
import MainPage from "./components/pages/MainPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { PokemonProvider } from "./components/context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <NavBar />
      <MainPage />
    </PokemonProvider>
  );
}

export default App;
