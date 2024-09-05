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
            Nesta aula vamos estudar as particularidades do desenho de moda e
            sua função na produção de moda.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Proporção e Anatomia de Moda</h1>
          <p>
            Nesta aula nós vamos estudar a proporção do corpo feminino para moda
            (9 cabeças). É explicado a proporção do corpo dividida em tamanhos
            de cabeça e onde cada elemento do corpo está nesta proporção.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Posições de Croquis</h1>
          <p>
            Aqui é explicado como desenhar o corpo em outros ângulos (lateral, ¾
            e costas), utilizando o esboço de formas básicas apresentado na
            primeira aula. E como as linhas auxiliares se comportam com esta
            variação.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Rostos, Mãos e Pés</h1>
          <p>
            Estas são as partes mais expressivas em qualquer desenho. Nesta aula
            vamos aprender como criar rostos mão e pés para nossos croquis.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Roupas Básicas</h1>
          <p>
            A partir dos desenho de poses criados mostramos como adequar looks
            simples (casuais) às poses utilizando as linhas auxiliares.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Vestidos</h1>
          <p>
            Aqui ampliamos as possibilidades do alunos conduzindo-o a produzir 3
            croquis com um nível de dificuldade maior.
          </p>
        </div>
        <div className={styles.sub_container7}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Teoria das Cores</h1>
          <p>
            Nesta aula aprendemos a combinar cores para aplicarmos em nossas
            pinturas.
          </p>
        </div>
        <div className={styles.sub_container8}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Croqui com lápis e tinta</h1>
          <p>
            Utilizamos um dos croquis produzidos para pintarmos apresentando a
            técnica de lápis de cor
          </p>
        </div>
        <div className={styles.sub_container9}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Aquarela</h1>
          <p>
            Utilizamos um dos croquis produzidos para pintarmos apresentando a
            técnica de aquarela.
          </p>
        </div>
      </div>
    </div>
  );
}
