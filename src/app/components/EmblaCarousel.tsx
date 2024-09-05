"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./EmblaCarousel.module.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false },
      
    ),
  ]);
  return (
    <div className={styles.all}>
      <div className={styles.title}>
        <h1 className={styles.title_decor}>
          O QUE FALAM DE <span className={styles.spam}>NÓS</span>
        </h1>
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <div className={styles.pic_name}>
              <img src="/diogo-ferreira.png" alt="foto testemunha" />
              <h3>Diogo Ferreira</h3>
              <h4>Ex-aluno</h4>
            </div>
            <div className={styles.text}>
              <h2>
                “O curso foi muito importante pois aprendi a utilizar o programa
                Photoshop e me deu mais uma alternativa no meu currículo.
                Gostaria muito de fazer os outros cursos porém o tempo não
                deixa. Indico o curso pois além da atenção e muito capacitado e
                possui muita infraestrutura.”.
              </h2>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.pic_name}>
              <img src="/diogo-ferreira.png" alt="foto testemunha" />
              <h3>Diogo Ferreira</h3>
              <h4>Ex-aluno</h4>
            </div>
            <div className={styles.text}>
              <h2>
                “O curso foi muito importante pois aprendi a utilizar o programa
                Photoshop e me deu mais uma alternativa no meu currículo.
                Gostaria muito de fazer os outros cursos porém o tempo não
                deixa. Indico o curso pois além da atenção e muito capacitado e
                possui muita infraestrutura.”.
              </h2>
            </div>
          </div>
          <div className={styles.embla__slide}>
            <div className={styles.pic_name}>
              <img src="/diogo-ferreira.png" alt="foto testemunha" />
              <h3>Diogo Ferreira</h3>
              <h4>Ex-aluno</h4>
            </div>
            <div className={styles.text}>
              <h2>
                “O curso foi muito importante pois aprendi a utilizar o programa
                Photoshop e me deu mais uma alternativa no meu currículo.
                Gostaria muito de fazer os outros cursos porém o tempo não
                deixa. Indico o curso pois além da atenção e muito capacitado e
                possui muita infraestrutura.”.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
