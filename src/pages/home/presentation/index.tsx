import NavBar from "../../../components/navbar";
import HeaderHome from "./components/header";
import ListPokemon from "./components/listPokemon";
import { Container, Content } from "./styles";

const Home = () => {
    return (
        <Container>
            <Content>
                <NavBar />

                <HeaderHome />

                <ListPokemon />
            </Content>

        </Container>


    );
}

export default Home;