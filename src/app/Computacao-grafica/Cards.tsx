import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cursos de desenho e pintura</h1>
        <h2 className={styles.sub_title}>Presencial</h2>
        <h3 className={styles.description}>
          Escolha o seu curso e comece a jornada que vai mudar a sua vida!
        </h3>
      </div>
      <div className={styles.cards_container}>
        <Link href="/Design-kids">
          <img
            className={styles.cards}
            src="/img-designkids.png"
            alt="criança pintando"
          />
        </Link>
        <Link href="/Ilustracao-digital">
          <img
            className={styles.cards}
            src="/ilustracao.png"
            alt="desenho"
          />
        </Link>
        <Link href="/Design-pulicitario">
          <img
            className={styles.cards}
            src="/img-design.png"
            alt="pintura"
          />
        </Link>
        <Link href="/Edicao-video">
          <img
            className={styles.cards}
            src="/img-video.png"
            alt="desenho"
          />
        </Link>
        <Link href="/Modelagem-3d">
          <img
            className={styles.cards}
            src="/img-modelagem3d.png"
            alt="desenho"
          />
        </Link>
      </div>
    </div>
  );
}
