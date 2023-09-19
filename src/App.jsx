import "./App.css";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import usePokemon from "./services/usePokemon";

function App() {
  const { data, filtered, handleClick, handleSubmit, handleOnChange } = usePokemon();

  return (
    <>
    <nav className="navbar navbar-light bg-light">#My Pokedex</nav>
    
    <main>
      <div>
      <Nav
        fnSubmit={handleSubmit}
        fnClick={handleClick}
        fnOnChange={handleOnChange}
        dataOptions={filtered}
      />
      {data && <Card data={data} />}</div>
    </main>

    </>
  );
}

export default App;
