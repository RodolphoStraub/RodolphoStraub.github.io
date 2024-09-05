"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./EmblaCarousel.module.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  return (
    <div className={styles.all}>
      <h1 className={styles.title_decor}>Estrutura moderna e confortável!</h1>
      <div className={styles.main_container}>
        <div className={styles.desc}>
          <p>
            Mesmo quando ainda era só uma ideia, o Curso Graph-it já era um
            lugar completamente diferente de tudo o que existia até então. Will
            e Chico queriam montar um lugar moderno e aconchegante, funcional e
            dinâmico. Nada de Curso de Design com cara de escritório, ou Curso
            de Desenho com jeito de casa antiga, nosso ambiente teria a missão
            de contagiar a todos com a nossa paixão por este lugar.
          </p>
          <p>Baseado nas
            cores da nossa identidade visual, nossa decoração promove uma
            imersão completa do aluno na experiência “Graph-it”, potencializando
            seu aprendizado e desenvolvimento. E além disso tudo, contamos com
            salas climatizadas, mesas de desenho individuais de alta qualidade,
            computadores de última geração e uma equipe altamente capacitada
            para oferecer a melhor experiência possível.</p>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <div className={styles.pic}>
                <img src="/quemsomos_2.jpg" alt="foto testemunha" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic}>
                <img src="/quemsomos_2.jpg" alt="foto testemunha" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic}>
                <img src="/quemsomos_2.jpg" alt="foto testemunha" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
