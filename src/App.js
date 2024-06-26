import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experience/Experiences";
import About from "./components/Banner/About";
import Activities from "./components/Activities/Activities";
import Particle from "./Particle";
function App() {
  return (
    <Container>
      <Banner>
        <Particle className="overflow-hidden"/>
        <Header />
        <ProfComponent />
      </Banner>
      <About />
      <LightColor>
        <Experiences />
      </LightColor>
      <Activities />
      <LightColor>
        <Projects />
      </LightColor>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding-bottom: 6rem;
  position: relative;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
