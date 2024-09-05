import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>Por que fazer um curso de desenho?</h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Técnicas</h2>
            <p>
              Nosso curso de desenho pode fornecer uma base sólida em técnicas
              de desenho fundamentais como linhas, formas, proporções,
              sombreamento e perspectiva.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Criatividade</h2>
            <p>
              Nosso curso de desenho permite que você explore e desenvolva sua
              criatividade, experimente diferentes técnicas e explore sua
              imaginação.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Observação</h2>
            <p>
              O ato de desenhar desenvolve em você um olhar atento aos detalhes
              e uma capacidade de observação aguçada.
            </p>
          </div>
          <div className={styles.context}>
            <h2>relaxar</h2>
            <p>
              Nosso curso foi pensado para que sua experiência seja o mais
              confortável possível, para você se desconectar do extresse diário
              e relaxar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
