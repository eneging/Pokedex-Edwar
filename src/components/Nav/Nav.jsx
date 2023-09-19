import "./Nav.css";

function Nav({ fnSubmit, fnClick, fnOnChange, dataOptions }) {
  return (
    <nav className="nav-ctn">
      <form onSubmit={fnSubmit}>
        <label htmlFor="name">
          Escribe el nombre específico de un pokemon:
        </label>
        <input type="text"  placeholder="----------Busca un pokemon---------------"/>
        <button type="submit">Buscar</button>
      </form>
      <div className="ctn-input">
        <label>Filtra según escribes:</label>
        <div id="options">
          <input type="text" placeholder="-----------busca tu pokemon-------" onChange={fnOnChange} />
          <ul>
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button value={pokemon.name} onClick={fnClick}>{pokemon.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <button onClick={fnClick} value="pikachu">
            Pikachu
          </button>
        </div>
        <div>
          <button onClick={fnClick} value="charizard">
            Charizard
          </button>
        </div>
      </div>
     <div className="ctn-img"></div>
    </nav>
  );
}

export default Nav;
