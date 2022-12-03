import React from "react";

class ComponenteDeClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    const getPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=40",
          {
            method: "GET",
          }
        );
        const { results } = await response.json();
        this.setState({ pokemons: results });
      } catch (error) {
        alert("Something wrong happend");
      }
    };
    getPokemons();
  }

  render() {
    return (
      <div>
        {this.state.pokemons.map((item, index) => {
          return <h3>{item.name}</h3>;
        })}
      </div>
    );
  }
}

export default ComponenteDeClase;
