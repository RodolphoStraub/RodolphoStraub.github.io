import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          O que a arte faz pelos pequenos artistas?
        </h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Autoestima</h2>
            <p>
              A criação de arte pode ser uma fonte de satisfação e realização
              pessoal para as crianças.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Criatividade</h2>
            <p>
              O ensino da arte estimula a criatividade, a inovação e a
              capacidade de resolução de problemas.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Comunicação</h2>
            <p>
              A arte permite que as crianças expressem suas ideias e emoções de
              uma forma não verbal transmitindo ideias e sentimentos de forma
              clara e eficaz.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Pensamento crítico</h2>
            <p>
              A criação de arte envolve a tomada de decisões e escolhas, como a
              escolha de cores, formas e materiais. Isso ajuda a desenvolver o
              pensamento crítico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
