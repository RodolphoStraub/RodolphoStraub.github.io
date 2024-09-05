"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import styles from "./EmblaCarousel.module.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <div className={styles.title}>
          <h1 className={styles.title_decor}>GALERIA</h1>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/desenho1.jpg" alt="desenho1" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/desenho2.jpg" alt="desenho2" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/desenho3.jpg" alt="desenho3" />
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div className={styles.pic_name}>
                <img src="/desenho4.jpg" alt="desenho4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
