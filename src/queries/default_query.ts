import { gql } from "@apollo/client";

export const GetAllPokemons = gql`
  query samplePokeAPIquery {
    
  pokemon_v2_pokemon {
    name
    id
    pokemon_v2_pokemonsprites(limit: 2) {
      sprites
    }
    pokemon_v2_pokemontypes {
      type_id
      pokemon_v2_type {
        name
      }
    }
  }
}
`;
