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
          <h1>Fundamentos do desenho e da pintura</h1>
          <p>
            Nesta fase você vai aprender os fundamentos do desenho e da pintura.
            Veremos esboço com formas básicas,como contornar corretamente o seu
            desenho e como pintá-lo corretamente com lápis de cor.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Mais técnicas, mais cool</h1>
          <p>
            Nesta fase começaremos a ver técnicas mais avançadas, como
            construção de rosto e corpo, contorno com hierarquia e sombra na
            pintura.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Hora da tinta</h1>
          <p>
            Nesta fase vamos conhecer o incrível mundo da tinta, desde as tintas
            e os pincéis até fazermos telas completas.
          </p>
        </div>

        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Aquarela</h1>
          <p>
            Nesta fase vamos aprender a utilizar uma tinta com características
            únicas.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Sua excelência, O Grafite</h1>
          <p>
            Nesta fase nós vamos aprender a utilizar a mais eficiente, dinâmica,
            versátil e ágil ferramenta de desenho.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Conhecendo os grandes mestres</h1>
          <p>Nesta fase, para cada grande mestre você terá um desafio.</p>
        </div>
      </div>
    </div>
  );
}
