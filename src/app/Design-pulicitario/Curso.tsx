import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>Torne-se um Designer Gráfico</h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Impacto Visual</h2>
            <p>
              O design gráfico desempenha um papel fundamental na comunicação
              visual. Ao criar designs atraentes e eficazes, você pode ajudar
              empresas e organizações a transmitirem suas mensagens de forma
              clara e impactante. Ao aprender a habilidade de comunicar
              visualmente, você pode influenciar a percepção do público-alvo
              sobre marcas, produtos e serviços.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Aprendizado</h2>
            <p>
              O campo do design gráfico está em constante evolução devido às
              mudanças nas tecnologias, tendências e demandas do mercado. Isso
              significa que você terá a oportunidade de aprender continuamente,
              explorar novas ferramentas e técnicas, e expandir suas habilidades
              para se manter atualizado.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Mercado</h2>
            <p>
              Com a crescente importância do design visual e da comunicação
              visual em diferentes setores, o mercado de trabalho para designers
              gráficos tem se expandido. Empresas estão cada vez mais
              valorizando a qualidade e a eficácia de sua presença visual, o que
              cria uma demanda contínua por profissionais qualificados em design
              gráfico.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Desafio</h2>
            <p>
              Lembre-se de que, embora haja muitas vantagens em se tornar um
              designer gráfico, também é importante considerar os desafios e a
              competição no campo. É necessário estar sempre disposto a
              aprender, aprimorar suas habilidades e se adaptar às demandas do
              mercado para ter sucesso como designer gráfico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
