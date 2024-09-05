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
          <h1>Recortes e Transições</h1>
          <p>
            Começamos nossos estudos por aqui, com o programa Premiere Pro,
            aprenderemos a fazer recortes de vídeos e criar transições entre
            eles.
          </p>
        </div>
        <div className={styles.sub_container2}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Controles de Efeitos</h1>
          <p>
            Aqui utilizaremos máscaras para isolar elementos no vídeo, além de
            um aprofundamento em transições e transformações manuais.
          </p>
        </div>
        <div className={styles.sub_container3}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Layouts Premiere</h1>
          <p>
            Nessa etapa faremos um layout animado, utilizando as ferramentas de
            forma e texto do programa, além de criar animações para as peças do
            layout.
          </p>
        </div>
        <div className={styles.sub_container4}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Transições e Movimentos</h1>
          <p>
            Agora no After Effects, veremos ferramentas novas que agilizam o
            processo de edição e algumas já familiares como máscaras,
            transformações manuais e ajustes.
          </p>
        </div>
        <div className={styles.sub_container5}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Vinheta</h1>
          <p>
            Nesse exercício aprenderemos sobre animação no After Effects para
            animarmos uma logo, usaremos também o sistema de partículas, que
            possibilita a criação de diversos efeitos especiais.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Campanhas de Produtos</h1>
          <p>
            Criaremos um layout divulgando um produto e, com ele pronto, faremos
            uma animação desse layout com os elementos se movendo e interagindo
            entre si.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Efeitos Especiais</h1>
          <p>
            Nessa etapa aprenderemos sobre efeitos especiais e como utilizá-los,
            utilizaremos elementos da natureza como o fogo para criar uma cena
            fantástica e realista através de modos de mesclagem e ajustes de
            cor. Aprenderemos também como utilizar a famosa {'"'}tela verde{'"'}.
          </p>
        </div>
        <div className={styles.sub_container6}>
          <h2>
            <i className={styles.arrow}></i>
          </h2>
          <h1>Projeto Final</h1>
          <p>
            Para concluirmos nossos estudos, você fará um vídeo divulgando um
            produto, loja ou instituição, para que possamos revisar os assuntos
            vistos até aqui.
          </p>
        </div>
      </div>
    </div>
  );
}
