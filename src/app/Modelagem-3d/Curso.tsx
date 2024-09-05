import styles from "./Curso.module.css";

export default function Curso() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Curso de Modelagem <br />e Animaçao 3D
        </h1>
        <div className={styles.text_container}>
          <div className={styles.context}>
            <h2>O Futuro</h2>
            <p>
              O mercado de modelagem e animação em 3D é verdadeiramente
              maravilhoso e promissor. Sua capacidade de criar mundos virtuais e
              objetos que desafiam a imaginação é uma prova do poder da
              tecnologia e da criatividade humana. Com a evolução contínua da
              tecnologia e a expansão de suas aplicações, podemos esperar que o
              futuro seja ainda mais emocionante nesse campo empolgante.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Mercado</h2>
            <p>
              Com a demanda contínua por conteúdo 3D de alta qualidade, o
              mercado de modelagem e animação 3D está em constante crescimento.
              Isso oferece oportunidades empolgantes para profissionais que
              desejam entrar ou avançar nesse campo.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Realismo Incrível</h2>
            <p>
              A modelagem 3D permite criar objetos e ambientes virtualmente
              indistinguíveis da realidade. Isso é fundamental para a indústria
              de filmes e jogos, onde a imersão do público é a prioridade.
            </p>
          </div>
          <div className={styles.context}>
            <h2>Aplicações Variadas</h2>
            <p>
              Aplicações variadas: A modelagem 3D é usada em diversos setores,
              desde a indústria de entretenimento até a medicina e a
              arquitetura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
