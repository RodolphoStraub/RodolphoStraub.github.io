import styles from "./Numbers.module.css";

export default function Nymbers() {
  return (
    <>
      <div className={styles.numbers_all}>
        <div>
          <h1>GRAPH-IT EM NÚMEROS</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.inner_card}>
            <img className={styles.img} src="/icon_alunos.png" />
            <h1>+3000</h1>
            <p>ALUNOS</p>
            </div>
            <div className={styles.inner_card}>
              <img className={styles.img} src="/icon_calendario.png" />
              <h1>15 ANOS</h1>
              <p>DE MERCADO</p>
            </div>
            <div className={styles.inner_card}>
              <img className={styles.img} src="/icon_cursos.png" />
              <h1>12 CURSOS</h1>
              <p>DIFERENTES</p>
            </div>
        </div>
      </div>
    </>
  );
}
