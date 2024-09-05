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
          <h1>Criação de Objetos Básicos</h1>
          <p>
            Iniciando nossos estudos, aprenderemos como configurar e navegar
            pelo programa, veremos também como criar formas básicas e
            manipulá-las.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Modelagem com Linhas</h1>
          <p>
            Agora que sabemos como criar formas, vamos ver um método diferente,
            baseado em linhas para criar nossas formas, ideal para objetos
            simétricos e com curvas muito acentuadas.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Modelagem Poligonal</h1>
          <p>
            Nessa etapa aprenderemos a usar polígonos editáveis, formas essas
            que podemos modelar mais livremente, movendo individualmente suas
            quinas, areas e faces.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Criação de Personagens</h1>
          <p>
            Com as principais ferramentas de modelagem dominadas, vamos
            colocá-las em prática! Nessa etapa vamos criar um personagem do
            zero, desde o corpo até as roupas, cabelo e acessórios.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Pintura e Texturização</h1>
          <p>
            Vamos adicionar cores ao nosso personagem, veremos também como criar
            e aplicar texturas ao nosso personagem e outros objetos
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Rig e Controladores de Movimentos</h1>
          <p>
            Nessa etapa vamos criar um esqueleto para o nosso personagem.
            Através de ossos e controladores, faremos com que o personagem seja
            animável e responsivo.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Animação de Personagens</h1>
          <p>
            Nosso personagem está pronto para ser animado! Aqui entenderemos
            como funciona o sistema de linha do tempo para criar animações de
            nosso personagem, veremos também como exportar essa animação para um
            formato adequado.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Projeto Final</h1>
          <p>
            Para finalizar nossos estudos, o aluno deve criar um novo personagem
            e fazer uma animação do mesmo, utilizando as ferramentas e técnicas
            que aprendemos durante o curso.
          </p>
        </div>
      </div>
    </div>
  );
}
