import type { Metadata } from "next";
import Head from "next/head";

import styles from "./Banner.module.css";
import Curso from "./Curso";
import EmblaCarousel from "./EmblaCarousel";
import Ementa from "./Ementa";
import Vantagem from "./Vantagem";

export const metadata: Metadata = {
  title: "Art",
  description: "Curso de Artes Visuais",
};

export default function Page() {
  return (
    <>
      <div className={styles.all}>
        <img src="/banner-graphitart.png" alt="banner" />
      </div>
      <Curso />
      <Ementa />
      <EmblaCarousel />
      <Vantagem />
    </>
  );
}
