import { useEffect, useState } from "react";
import ComponenteDeClase from "./components/ComponenteDeClase";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Saludar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hola Mundo</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Regresa
      </button>
    </div>
  );
};

const App = ({ nombre }) => {
  const [state, setState] = useState({
    pokemons: [],
  });

  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
          method: "GET",
        });
        const { results } = await response.json();
        setState({ pokemons: results });
      } catch (error) {
        alert("Something wrong happend");
      }
    };
    getPokemons();
  }, []);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=${limit}`,
          {
            method: "GET",
          }
        );
        const { results } = await response.json();
        setState({ pokemons: results });
      } catch (error) {
        alert("Something wrong happend");
      }
    };
    getPokemons();
  }, [limit]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComponenteDeClase />} />
          <Route path="/saludar" element={<Saludar />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>Compomente de funcion</h1>
      <div>
        {state.pokemons.map((item, index) => {
          return <h3 key={`${item}-${index}`}>{item.name}</h3>;
        })}
      </div>
      <button
        onClick={() => {
          setLimit(40);
        }}
      >
        Aumenta a 40
      </button>
      <h1>Compomente de clase</h1> */}
      {/* <ComponenteDeClase nombre={"Gustavo"}></ComponenteDeClase> */}
    </>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <h1>Hola Mundo</h1>
//       <ComponenteDeClase></ComponenteDeClase>
//     </>
//   );
// }
