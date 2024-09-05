import styles from "./Evolution.module.css";

export default function Evolution() {
  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <h1 className={styles.title_decor}>GRAPH-IT</h1>
        <h1 className={styles.title_decor}>
          <span className={styles.color}> EVOLUTION</span>
        </h1>
        <h2 className={styles.sub_title}>
          A EVOLUÇÃO DA MARCA AO LONGO DOS ANOS
        </h2>
        <div className={styles.pic}>
          <img className={styles.logo} src="/quem-somos-1.png" alt="logo 1" />
          <img className={styles.logo} src="/quem-somos-2.png" alt="logo 2" />
          <img className={styles.logo} src="/quem-somos-3.png" alt="logo 3" />
        </div>
        <div className={styles.descrition}>
          <div className={styles.descrition_box}>
            <h1 className={styles.year}>2009</h1>
            <h1>
              <i className={styles.arrow}></i>
            </h1>
            <p>
              Fundação. <br /> Mais precisamente no dia 22 de outubro de 2009,
              tivemos até bolo
            </p>
          </div>
          <div className={styles.descrition_box}>
            <h1 className={styles.year}>2010 </h1>
            <h1>
              <i className={styles.arrow}></i>
            </h1>
            <p>
              Em junho de 2010 aumentamos o Curso para 60m². Agora era só
              conseguir encher de gente. <br /> Encheu em agora!
            </p>
          </div>
          <div className={styles.descrition_box}>
            <h1 className={styles.year}>2012</h1>
            <h1>
              <i className={styles.arrow}></i>
            </h1>
            <p>
              No fim de 2012, realizamos nossa obra que inificou as salas e
              dinamizamos o layout estrutural.
            </p>
          </div>
          <div className={styles.descrition_box}>
            <h1 className={styles.year}>2013</h1>
            <h1>
              <i className={styles.arrow}></i>
            </h1>
            <p>
              Ampliamos a quantidade de cursos de 3 para 7, entre eles, o Curso
              de Edição de Video e de Modelagem e Animação em 3D, inéditos na
              cidade.
            </p>
          </div>
          <div className={styles.descrition_box}>
            <h1 className={styles.year}>2016</h1>
            <h1>
              <i className={styles.arrow}></i>
            </h1>
            <p>
              Segunda reforma, modernização do ambiente. <br /> De acordo com o
              IBGE 60% das empresas não chegam ao quinto ano de vida, nós
              conseguimos!
            </p>
          </div>
          <div className={styles.descrition_box}>
            <h1 className={styles.year}>2024</h1>
            <h1>
              <i className={styles.arrow}></i>
            </h1>
            <p>
              No dia 19/02/2024 é Inaugurado no Shopping 2000, em Itaipava, a
              nova unidade do curso Graph-it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
