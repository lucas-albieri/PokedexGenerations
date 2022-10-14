
import { useQuery } from "@apollo/client";
import { FormControl } from "@mui/material";
import { useState } from "react";
import NavBar from "../../../components/navbar";
import { DifficultyEnum } from "../../../models/enums/difficulty_enum";
import { PokemonListModel } from "../../../models/list_all_pokemons";
import { GetAllPokemons } from "../../../queries/default_query";
import { Container, Content, Input, PokemonOfDayBlock, PokemonOfDayTitle, SelectMode, SelectModeButtonProps, SelectModeButtons, SelectModeTitle } from "./style";

const PokemonOfDay = () => {

    const [difficulty, setDifficulty] = useState<DifficultyEnum>(DifficultyEnum.easy);
    const [namePokemon, setNamePokemon] = useState<string>("");

    const allPokemons = useQuery(GetAllPokemons,
        {
            variables: {
                limit: 900,
                offset: 0,
                _name: '%%',
                id: 0,
            }
        });

    const _pokemon = allPokemons?.data?.pokemon_v2_pokemon.find((pokemon: { name: string; }) => pokemon.name.includes(namePokemon ?? '')) as any | undefined;

    const pokemonSprite = _pokemon && JSON.parse(_pokemon!.pokemon_v2_pokemonsprites[0].sprites)
    // console.log()



    return (
        <Container>

            <NavBar />
            <Content>
                <SelectMode>

                    <SelectModeTitle>
                        Selecione o Modo
                    </SelectModeTitle>

                    <SelectModeButtons>

                        <SelectModeButtonProps
                            isActive={difficulty === DifficultyEnum.easy}
                            onclick={() => setDifficulty(DifficultyEnum.easy)}
                            borderTopRightRadius="0"
                            borderBottomRightRadius="0"
                        >
                            Fácil
                        </SelectModeButtonProps>

                        <SelectModeButtonProps
                            isActive={difficulty === DifficultyEnum.hard}
                            onclick={() => setDifficulty(DifficultyEnum.hard)}
                            borderTopLeftRadius="0"
                            borderBottomLeftRadius="0"
                        >
                            Difícil
                        </SelectModeButtonProps>
                    </SelectModeButtons>
                </SelectMode>

                <PokemonOfDayBlock>
                    <PokemonOfDayTitle>
                        Qual é o Pokemon do dia?
                    </PokemonOfDayTitle>

                    <FormControl
                        fullWidth
                        sx={{
                            alignItems: "center",
                        }}
                    >
                        <Input
                            placeholder="Digite o nome do Pokemon"
                            onChange={(e) => setNamePokemon(e.target.value)}
                        />
                        {_pokemon &&
                            <div
                                style={{
                                    display: "flex",
                                    marginTop: "0.8rem",
                                    backgroundColor: "#fff",
                                    width: "25%",
                                    borderRadius: "0.35rem",
                                    padding: "1rem 1rem",
                                    boxShadow: "0 0 5px 1px #eeddfc",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={pokemonSprite ? pokemonSprite.other['official-artwork'].front_default : ''}
                                    style={{
                                        width: "12%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                                <p
                                    style={{
                                        color: "#4a4a4a",
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        textTransform: "capitalize",
                                        marginLeft: "0.5rem",
                                    }}
                                >
                                    {allPokemons?.data.pokemon_v2_pokemon.find((pokemon: { name: string; }) => pokemon.name.includes(namePokemon))?.name}
                                </p>
                            </div>
                        }

                    </FormControl>
                </PokemonOfDayBlock>
            </Content>

        </Container>
    )
}

export default PokemonOfDay;