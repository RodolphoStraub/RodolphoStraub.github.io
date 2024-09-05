import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Curso de <br />
          Edição de Video
        </h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>Arte Dinâmica</h2>
            <p>
              A edição de vídeo permite que você conte histórias e transmita
              ideias através da combinação de imagens, som e efeitos visuais. É
              uma maneira poderosa de expressar sua criatividade e visão
              artística.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Criar Conteúdo</h2>
            <p>
              Se você tem interesse em criar conteúdo para plataformas online,
              como YouTube, Vimeo, TikTok e outras redes sociais, a edição de
              vídeo é fundamental para produzir vídeos de alta qualidade e
              atrair um público maior.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Mercado</h2>
            <p>
              Profissionais em áreas como marketing, publicidade, produção de
              filmes, televisão e mídias sociais geralmente precisam de
              conhecimentos em edição de vídeo para criar conteúdo atraente.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Hobby e Diversão</h2>
            <p>
              Além de todas as vantagens profissionais, a edição de vídeo pode
              ser um hobby gratificante e divertido. Você pode criar vídeos
              pessoais, montar montagens de momentos especiais, documentar
              viagens e muito mais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
