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
          <h1>Pintura Blocada</h1>
          <p>
            Nessa etapa vamos aprender a gerar volumetria em nossos desenhos
            através de luz e sombra. Veremos suas aplicações e comportamentos,
            resultando em desenhos mais realistas.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Degradé</h1>
          <p>
            Aqui faremos um sombreamento mais realista através de degradês,
            gerando diferença nos níveis de luz e sombra para uma pintura ainda
            mais realista.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Line-art</h1>
          <p>
            Nessa etapa vamos focar em melhorar o nosso controle de traço e
            aprender sobre line-art e seus acabementos, processo esse que
            fazemos finalizações em nosso esboço inicial.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Esboço e Anatomia</h1>
          <p>
            Aqui vamos aprender a esboçar personagens do zero. Falaremos sobre a
            proporção do corpo, divisão do rosto e anatomia para criar
            personagens mais realistas.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Cenários</h1>
          <p>
            Nessa etapa criaremos cenários considerando profundidade de campo e
            perspectiva, além da criação de pincéis customizados.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Ilustração Realista</h1>
          <p>
            Para fechar nossos estudos, faremos uma ilustração realista, onde
            todos os volumes e divisões são feitos através de luz e sombra,
            também abordaremos texturas e zonas de cor.
          </p>
        </div>
      </div>
    </div>
  );
}
