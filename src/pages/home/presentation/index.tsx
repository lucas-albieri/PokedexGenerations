import NavBar from "../../../components/navbar";
import HeaderHome from "./components/header";
import { Container, Content } from "./styles";

const Home = () => {
    return (
        <Container>
            <Content>
                <NavBar />

                <HeaderHome />

                <div style={{
                    height: "1000px",
                }}>
                    dsad
                </div>
            </Content>

        </Container>


    );
}

export default Home;