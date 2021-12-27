import "./App.css";
import MainPage from "./components/pages/MainPage.jsx";
import NavBar from "./components/NavBar.jsx";
import { PokemonProvider } from "./components/context/PokemonContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collection from "./components/pages/Collection";
import Search from "./components/Search";

function App() {
  return (
    <PokemonProvider>
      <Router>
        <NavBar />
        <Search />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/collection" exact component={Collection} />
        </Switch>
      </Router>
    </PokemonProvider>
  );
}

export default App;
