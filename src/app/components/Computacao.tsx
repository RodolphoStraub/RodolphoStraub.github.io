import styles from "./Computacao.module.css";
import Link from "next/link";

export default function Computacao() {
  return (
    <div className={styles.all}>
      <div className={styles.sub_all}>
        <div className={styles.context}>
          <img src="/logo_computacao_grafica.png" alt="logo desenho" />
          <p>
            Aprender computação gráfica e ilustração digital é uma jornada
            extraordinária que combina habilidades técnicas com a liberdade de
            expressão artística. Ao dominar as ferramentas digitais, somos
            capazes de criar mundos inteiros a partir do nada, dando vida a
            personagens, paisagens e cenários que só existiam em nossa
            imaginação. Além do conhecimento nescessário para trabalhar e se
            desenvolver profissionalmente nessa área. mergulhe nessa jornada e
            descubra o poder da arte digital.
          </p>
          <Link href="/Computacao-grafica">
            <button className={styles.button}>clique e saiba mais</button>
          </Link>
        </div>
        <div>
          <img
            className={styles.pic}
            src="/img_computacao.png"
            alt="menina desenhando"
          />
        </div>
      </div>
    </div>
  );
}
