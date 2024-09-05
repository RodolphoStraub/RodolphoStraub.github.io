import type { Metadata } from "next";

import Text from "./Text";
import styles from "./Banner.module.css";
import EmblaCarousel from "./EmblaCarousel";
import Evolution from "./Evolution";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Curso de Artes Visuais",
};

export default function Page() {
  return (
    <>
      <div className={styles.all}>
        <img src="/banner-quem-somos_alt.png" alt="banner " />
      </div>
      <Text />
      <EmblaCarousel />
      <Evolution />
    </>
  );
}
