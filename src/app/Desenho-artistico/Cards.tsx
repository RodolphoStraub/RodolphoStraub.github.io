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
        <Link href="/Kids">
          <img
            className={styles.cards}
            src="/img-graphitkids.png"
            alt="criança pintando"
          />
        </Link>
        <Link href="/Art">
          <img
            className={styles.cards}
            src="/img-graphitart_alt.png"
            alt="desenho"
          />
        </Link>
        <Link href="/Plus">
          <img
            className={styles.cards}
            src="/img-graphitplus_alt.png"
            alt="pintura"
          />
        </Link>
        <Link href="/Fashion">
          <img
            className={styles.cards}
            src="/img-graphitfashion.png"
            alt="desenho"
          />
        </Link>
      </div>
    </div>
  );
}
