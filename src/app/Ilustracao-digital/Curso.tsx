import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>vantagens da Ilustração Digital</h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Ferramentas</h2>
            <p>
              A ilustração digital permite que você utilize uma ampla variedade
              de ferramentas específicas para criar ilustrações digitais. Essas
              ferramentas oferecem recursos avançados, como camadas, pincéis
              personalizados, efeitos especiais e capacidade de edição. Isso lhe
              dá um maior controle sobre o processo criativo e possibilita
              experimentar diferentes estilos e técnicas.
            </p>
          </div>
          <div className={styles.context}>
            <h2>O Mundo</h2>
            <p>
              Com a ilustração digital, é fácil compartilhar seu trabalho
              on-line com um público global. Você pode mostrar suas ilustrações
              em portfólios digitais, sites, blogs e mídias sociais, alcançando
              um público maior do que seria possível apenas com mídias físicas.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Eficiência</h2>
            <p>
              A ilustração digital oferece recursos que ajudam a acelerar o
              processo de criação. Você pode criar rapidamente esboços digitais,
              fazer correções com facilidade e experimentar várias opções sem
              precisar refazer todo o trabalho.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Mercado</h2>
            <p>
              A demanda por ilustradores digitais tem crescido em várias áreas,
              como publicidade, editoração, design de jogos, filmes, animação e
              desenvolvimento de aplicativos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
