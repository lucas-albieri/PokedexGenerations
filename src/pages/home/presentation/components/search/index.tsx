import { Button, FormControl, InputBase, Stack } from "@mui/material";
import { Typography } from "../../../../../styles/globalStyles";
import { Theme } from "../../../../../styles/theme";
import { Search } from "./styles";

const SearchHome = () => {
    return (
        <Search>
            <FormControl sx={{ width: "55%" }}>
                <Typography
                    color={"white"}
                    subtitle={"type2"}
                    style={{
                        marginBottom: "10px",
                    }}>
                    Encontre seu Pokemon
                </Typography>
                <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <InputBase placeholder="Digite o ID ou o nome do pokemon desejado" sx={{
                        width: "80%",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "10px",
                        color: "black",
                        borderBottomRightRadius: "0px",
                        borderTopRightRadius: "0px",

                    }} color="secondary" />
                    <Button sx={{
                        borderRadius: "8px",
                        borderBottomLeftRadius: "0px",
                        borderTopLeftRadius: "0px",
                    }} variant="contained">Pesquisar</Button>
                </Stack>
            </FormControl>
            <Stack sx={{
                width: "30%",
                cursor: 'default',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "15px 10px",
                borderRadius: "5px",
                backgroundColor: `${Theme.theme.colors.rose700}`
            }}>
                <Typography subtitle={"type1"} color={"white"}>
                    Você pode Digitar o nome do pokemon ou o seu ID na pokedex oficial.
                </Typography>
            </Stack>
        </Search>
    )
}

export default SearchHome;