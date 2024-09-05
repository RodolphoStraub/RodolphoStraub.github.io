import Welcome from "./components/Welcome";
import Numbers from "./components/Numbers";
import Place from "./components/Place";
import EmblaCarousel from "./components/EmblaCarousel";
import Cursos from "./components/Cursos";
import Desenho from "./components/Desenho";
import Computacao from "./components/Computacao";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Banner/>
      <Welcome />
      <Cursos />
      <Desenho />
      <Computacao />
      <Numbers />
      <Place />
      <EmblaCarousel />
    </>
  );
}
