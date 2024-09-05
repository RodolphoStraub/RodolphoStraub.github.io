import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>Curso de arte</h1>
        <p className={styles.context}>
          Aprender arte é muito mais que simplesmente desenhar ou pintar. Um
          curso de artes promove o bem estar, aumenta a auto estima, aumenta a
          concentração e, mais importante, estimula o convívio social através de
          uma atividade prazerosa afastando um pouco os jovens do ambiente
          digital.
        </p>
      </div>
    </div>
  );
}
