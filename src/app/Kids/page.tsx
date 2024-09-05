import type { Metadata } from "next";

import styles from "./Banner.module.css";
import Curso from "./Curso";
import Material from "./Material";
import EmblaCarousel from "./EmblaCarousel";
import Ementa from "./Ementa";
import Vantagem from "./Vantagem";

export const metadata: Metadata = {
  title: "Kids",
  description: "Curso de Artes Visuais",
};

export default function Page() {
  return (
    <>
      <div className={styles.all}>
        <img src="/banner-graphitkids.png" alt="banner" />
      </div>
      <Curso />
      <Material />
      <Ementa />
      <EmblaCarousel />
      <Vantagem />
    </>
  );
}
