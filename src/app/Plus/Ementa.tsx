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
          <h1>Introdução ao Desenho</h1>
          <p>
            Nesta etapa do curso você vai aprender sobre a história do desenho,
            os principais materiais e ferramentas necessários para o desenho e
            técnicas básicas de observação e desenho.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Técnicas de Desenho</h1>
          <p>
            Nesta etapa vamos aprender técnicas de linhas e traços, manchas, uso
            de sombra e luz para criar profundidade e volume,composição e
            enquadramento de imagens e desenho de objetos em diferentes ângulos
            e posições.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Desenho de Retratos</h1>
          <p>
            Nesta etapa nós vamos aprender anatomia básica da cabeça e
            proporções faciais, Detalhes do rosto, Técnicas de retratos, Uso de
            luz e sombra, enquadramento e composição e retratos realistas.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Paisagens</h1>
          <p>
            Nesta etapa nós vamos aprender a criar profundidade e perspectiva em
            paisagens (árvores, montanhas, rochas e vegetação) e estudos de
            enquadramento e composição.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Criação de Personagens</h1>
          <p>
            Nesta etapa nós vamos aprender sobre anatomia básica do corpo
            humano, proporções, desenho de rosto, mãos e pés, criação de
            personagens básicos, luz e sombra, gestos e poses, anatomia
            avançada, roupas e acessórios.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Perspectiva</h1>
          <p>
            Nesta etapa você vai aprender sobre ponto de fuga e linha do
            horizonte, perspectiva paralela, oblíqua, aérea/esgoto, cavaleira,
            perspectiva do arquiteto e luz e sombra em perspectiva.
          </p>
        </div>
      </div>
    </div>
  );
}
