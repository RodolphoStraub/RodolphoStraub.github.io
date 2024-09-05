import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h1 className={styles.title}>
            Computação gráfica
          </h1>
          <p className={styles.context}>
            Para quase todos os lados que você olha existe algo feito em
            computação gráfica. Ela está presente em diversos segmentos como TV,
            cinema, jogos, animações e muitos outros. Habilidades como design
            gráfico, ilustração digital, modelagem 3d e edição de vídeos são
            vitais para os artistas que pretendem criar artes para estes
            segmentos.
          </p>
        </div>
      </div>
    </div>
  );
}
