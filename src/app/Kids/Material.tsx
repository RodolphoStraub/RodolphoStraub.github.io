"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./Material.module.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  return (
    <div className={styles.all}>
      <div className={styles.main}>
        <h1>NOSSO MÉTODO DE ENSINO</h1>
        <h2>Material acadêmico exclusivo</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
            <img src="/apostila-gkids.png" alt="apostila curso kids" />
          <h1 className={styles.title_decor}>
            Com o nosso novo método de ensino, as crianças recebem uma apostila
            que contém um jogo. Nesse jogo as crianças passam de fase a medida
            que concluem os exercícios de cada aula e ao final do percurso podem
            ganhar prêmios baseados em seu desempenho. Com esse método, as
            crianças vão aprender todas as técnicas de desenho e pintura de
            forma dinâmica, envolvente e divertida, enquanto os pais terão total
            compreensão do tempo e desenvolvimento de seus filhos.
          </h1>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/metodo-kids1.jpg" alt="foto testemunha" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/metodo-kids2.jpg" alt="foto testemunha" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/metodo-kids3.jpg" alt="foto testemunha" />
              </div>
            </div> <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/metodo-kids4.jpg" alt="foto testemunha" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
