import type { Metadata } from "next";

import styles from "./Banner.module.css";
import Cards from "./Cards";
import Curso from "./Curso";
import EmblaCarousel from "./EmblaCarousel";

export const metadata: Metadata = {
  title: "Computação Gráfica",
  description: "Curso de Artes Visuais",
};

export default function Page() {
  return (
    <>
      <div className={styles.all}>
        <img src="/banner-computacaografica.png" alt="banner" />
      </div>
      <Curso/>
      <Cards/>
      <EmblaCarousel/>
    </>
  );
}
