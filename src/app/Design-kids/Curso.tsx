import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>Jovens Artistas e a Tecnologia</h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Novas Formas de Expressão</h2>
            <p>
              A união da arte e da tecnologia permite que os jovens artistas
              experimentem novas formas de expressão criativa através de
              softwares como Photoshop que permite a criação de pinturas,
              montagens animações e vídeos.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Experimentação e Inovação</h2>
            <p>
              Quando as crianças combinam seu amplo potêncial criativo com a
              tecnologia elas descobrem várias possibilidades artísticas
              inovadoras que ampliam ainda mais a sua criatividade a medida que
              descobrem novas ferramentas.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Acesso Expandido</h2>
            <p>
              A tecnologia oferece meios de distribuição e acesso à arte que vão
              além das limitações físicas e geográficas. Tanto para que nossos
              jovens artistas divulguem sua arte quanto a possibilidade de
              acessar referencias e materiais didáticos do mundo todo.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Relaxar</h2>
            <p>
              Nosso curso foi pensado para que a experiência de seus filhos seja
              o mais confortável possível, para que eles se desconectem do
              extresse diário e relaxem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
