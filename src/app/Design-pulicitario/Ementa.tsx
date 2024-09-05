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
          <h1>Vetorização</h1>
          <p>
            Começamos o curso aprendendo a vetorizar no Illustrator, processo
            esse que nos permite desenhar qualquer figura de forma vetorial,
            garantindo uma qualidade de imagem excelente.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Identidade Visual</h1>
          <p>
            Nessa etapa criaremos identidades visuais completas, abordando todas
            as etapas do processo, como brainstorming, criação da logo, escolha
            e justificação das cores e textos até às aplicações da marca, com
            versões monocráticas e de luxo.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Layouts</h1>
          <p>
            Aqui aprenderemos a diagramar layouts, ferramenta essa que nos
            permite transmitir uma mensagem com uma organização harmônica entre
            formas e textos.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Montagem Fotográfica</h1>
          <p>
            Passando agora para o Photoshop, aprenderemos como recortar imagens
            e utilizá-las em diferentes contextos, dando um novo significado à
            nossa cena.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Tratamento</h1>
          <p>
            Com os recortes dominados, aprenderemos como adequar nossos recortes
            na cena e correções como remover manchas e espinhas, ajustes de
            níveis, cores e retoques.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Pintura Digital</h1>
          <p>
            Vamos ver também o processo de pintura no Photoshop, desde o
            processo de chapar cores, até o sombreamento e finalizações. O
            conhecimento de pintura nos auxilia no entendimento e posicionamento
            de sombras, além de criar novas possibilidades para ajustes e
            tratamentos.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Layouts Avançados</h1>
          <p>
            Voltamos a falar de layouts, dessa vez usando as ferramentas que o
            Photoshop nos proporciona como recortes, tratamentos e efeitos
            especiais automáticos.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Projeto Final</h1>
          <p>
            Para finalizarmos nossos estudos, o aluno irá criar uma identidade
            visual completa, desde a ideia e o símbolo até as aplicações através
            de mockups e montagens, mostrando como a logo seria usada na
            prática.
          </p>
        </div>
      </div>
    </div>
  );
}
