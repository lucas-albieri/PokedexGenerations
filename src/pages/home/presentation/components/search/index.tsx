import { Button, FormControl, InputBase, Stack } from "@mui/material";
import { useState } from "react";
import { Typography } from "../../../../../styles/globalStyles";
import { Theme } from "../../../../../styles/theme";
import { Search } from "./styles";

type SearchProps = {
    onSearch: (search: string) => void;
}

const SearchHome = ({ onSearch }: SearchProps) => {

    const [search, setSearch] = useState('');

    return (
        <Search>
            <FormControl
                sx={{ width: "55%" }}
            >
                <Typography
                    color={"white"}
                    subtitle={"type2"}
                    style={{
                        marginBottom: "10px",
                    }}>
                    Encontre seu Pokemon
                </Typography>
                <Stack
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                    <InputBase
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Digite o ID ou o nome do pokemon desejado"
                        sx={{
                            width: "80%",
                            backgroundColor: "white",
                            borderRadius: "6px",
                            padding: "10px 15px",
                            fontSize: '1.1rem',
                            color: "#232323",
                            borderBottomRightRadius: "0px",
                            borderTopRightRadius: "0px",

                        }}
                        color="secondary"
                    />
                    <Button
                        size="large"
                        sx={{
                            borderRadius: "6px",
                            borderBottomLeftRadius: "0px",
                            borderTopLeftRadius: "0px",
                        }}
                        variant="contained"
                        onClick={() => onSearch(search)}
                    >
                        Pesquisar
                    </Button>
                </Stack>
            </FormControl>
            <Stack
                sx={{
                    width: "30%",
                    cursor: 'default',
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "15px 10px",
                    borderRadius: "5px",
                    backgroundColor: `${Theme.theme.colors.rose700}`
                }}
            >
                <Typography
                    subtitle={"type1"}
                    color={"white"}
                >
                    Você pode Digitar o nome do pokemon ou o seu ID na pokedex oficial.
                </Typography>
            </Stack>
        </Search>
    )
}

export default SearchHome;