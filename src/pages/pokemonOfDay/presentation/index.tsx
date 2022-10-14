
import { useQuery } from "@apollo/client";
import { FormControl } from "@mui/material";
import { useState } from "react";
import NavBar from "../../../components/navbar";
import { TypeEnum } from "../../../enums/type_enum";
import { DifficultyEnum } from "../../../models/enums/difficulty_enum";
import { PokemonModel } from "../../../models/pokemon";
import { PokemonTypesModel } from "../../../models/pokemon_type_model";
import { GetAllPokemons } from "../../../queries/default_query";
import { Container, Content, Input, NumberOfTries, PokemonOfDayBlock, PokemonOfDayTitle, PokemonSelectedImage, PokemonSelectedName, PokemonSelectedPt1, PokemonSelectedPt2, PokemonsSelected, PokemonTip, PokemonTipImage, PokemonTipName, SelectMode, SelectModeButtonProps, SelectModeButtons, SelectModeTitle } from "./style";

const PokemonOfDay = () => {

    const [difficulty, setDifficulty] = useState<DifficultyEnum>(DifficultyEnum.easy);
    const [namePokemon, setNamePokemon] = useState<string>("");

    const allPokemons = useQuery(GetAllPokemons,
        {
            variables: {
                limit: 900,
                offset: 0,
                _name: '%%',

            }
        });

    const _pokemon = allPokemons?.data?.pokemon_v2_pokemon.find((pokemon: { name: string; }) => pokemon.name.includes(namePokemon ?? '')) as any | undefined;

    const pokemonTipSprite = _pokemon && JSON.parse(_pokemon!.pokemon_v2_pokemonsprites[0].sprites)

    const pokemonOfDay = allPokemons?.data?.pokemon_v2_pokemon[1] as PokemonModel | undefined;
    const PokemonOfDaySprite = pokemonOfDay && JSON.parse(pokemonOfDay!.pokemon_v2_pokemonsprites[0].sprites)
    const pokemonOfDayTypes = pokemonOfDay && pokemonOfDay.pokemon_v2_pokemontypes.map(
        (pokemon: PokemonTypesModel) => pokemon.type_id) as number[] | undefined;

    const [pokemonsSelected, setPokemonsSelected] = useState<PokemonModel[]>([]);
    const pokemonsSelectedSprite = pokemonsSelected && pokemonsSelected.map(
        (pokemon: PokemonModel) => JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites))
    const pokemonsSelectedTypes = pokemonsSelected && pokemonsSelected.map(
        (pokemon: PokemonModel) => pokemon.pokemon_v2_pokemontypes)


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
                            onChange={(e) => setNamePokemon(e.target.value.toLocaleLowerCase())}
                            value={namePokemon}
                        />
                        {_pokemon && namePokemon &&
                            <PokemonTip
                                onClick={() => {
                                    setPokemonsSelected([...pokemonsSelected, _pokemon])
                                    setNamePokemon('')
                                }}

                            >
                                <PokemonTipImage
                                    src={pokemonTipSprite ? pokemonTipSprite.other['official-artwork'].front_default
                                        : ''}
                                />
                                <PokemonTipName>
                                    {allPokemons?.data.pokemon_v2_pokemon.find((pokemon: { name: string; }) => pokemon.name.includes(namePokemon))?.name}
                                </PokemonTipName>
                            </PokemonTip>
                        }
                        <NumberOfTries>
                            Numeros de Tentativas: {pokemonsSelected.length}
                        </NumberOfTries>
                    </FormControl>
                    {
                        pokemonsSelected.map((pok, index) => {
                            return (
                                <PokemonsSelected>
                                    <PokemonSelectedPt1>
                                        <PokemonSelectedImage
                                            src={pokemonsSelectedSprite ? pokemonsSelectedSprite[index].other['official-artwork'].front_default : ''}
                                        />
                                        <PokemonSelectedName>
                                            {pok.name}
                                        </PokemonSelectedName>
                                    </PokemonSelectedPt1>
                                    {
                                        pokemonsSelectedTypes[index].map(type => {

                                            return (
                                                <PokemonSelectedPt2
                                                    style={{
                                                        backgroundColor: type.type_id === (pokemonOfDayTypes!.find((typeId: number) => typeId === type.type_id)) ? "#37d52c" : "#fa1a31",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "1rem",
                                                            fontWeight: "400",
                                                            color: "#fff",
                                                            textTransform: "capitalize",
                                                        }}
                                                    >
                                                        {
                                                            TypeEnum.byName(type.pokemon_v2_type.name)
                                                        }
                                                    </span>
                                                </PokemonSelectedPt2>
                                            )
                                        })
                                    }

                                </PokemonsSelected>
                            )
                        })
                    }

                    {/* <img src={pokemonsSelectedSprite ? pokemonsSelectedSprite.other['official-artwork'].front_default : ''} /> */}

                </PokemonOfDayBlock>
            </Content>

        </Container>
    )
}

export default PokemonOfDay;