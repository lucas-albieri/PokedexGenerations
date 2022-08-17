import { gql } from "@apollo/client";

export const GetAllPokemons = gql`
  query samplePokeAPIquery {
    
  pokemon_v2_pokemon(order_by: {id: asc}) {
    name
  }
}
`;
