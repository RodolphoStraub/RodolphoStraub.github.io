import styles from "./Ementa.module.css";

export default function Ementa() {
  return (
    <div className={styles.all}>
      <div className={styles.title}>
        <h1>Ementa</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.sub_container1}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mundo das cores</h1>
          <p>
            Neste mundo vamos aprender sobre a pintura de nossos desenhos, nos
            familiarizando com as ferramentas de pintura do Photoshop e a mesa
            digitalizadora, ferramenta que iremos utilizar durante todo o curso.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mundo luz e sombra</h1>
          <p>
            Neste mundo vamos estudar sobre luz e sombra, suas aplicações e
            comportamentos, gerando desenhos mais volumétricos, tridimensionais
            e realistas.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mundo dos traços</h1>
          <p>
            Neste mundo vamos focar em melhorar o nosso controle de traço e
            aprender sobre line-art e seus acabementos, processo esse que
            fazemos finalizações em nosso esboço inicial.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mundo do Concept</h1>
          <p>
            Neste mundo vamos usar nossa criatividade para caracterizar nossos
            personagens com roupas, ferramentas, armaduras e outros detalhes.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mundo dos cenários</h1>
          <p>
            Neste mundo vamos criar cenários considerando aspectos importantes
            como profundidade de campo e perspectiva, além de outros estilos
            mais estilizados como pixel art.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mundo dos quadrinhos</h1>
          <p>
            No último mundo de nossa jornada, juntaremos tudo que vimos até aqui
            para contar histórias através de quadrinhos.
          </p>
        </div>
      </div>
    </div>
  );
}
