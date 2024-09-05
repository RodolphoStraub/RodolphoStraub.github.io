import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Desenho! A habilidade funtamental do design de moda
        </h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Desenho à mão livre</h2>
            <p>
              É fundamental a habilidade de criar esboços rápidos e precisos de
              roupas, acessórios e detalhes de moda.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Composição</h2>
            <p>
              Um estilista precisa ter senso de equilíbrio, proporção e harmonia
              visual para criar composições atraentes.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Anatomia</h2>
            <p>
              Um bom entendimento de proporção e anatomia é crucial para
              desenhar figuras humanas com precisão.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Desenho Digital</h2>
            <p>
              O desenho digital oferece uma série de vantagens, como a
              possibilidade de correções rápidas, a facilidade de experimentar
              diferentes combinações de cores e texturas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
