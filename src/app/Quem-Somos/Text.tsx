import styles from "./Text.module.css";

export default function Text() {
  return (
    <>
      <div className={styles.all}>
        <h1 className={styles.title}>Um curso como nenhum outro</h1>
        <div className={styles.container_text}>
          <h2 className={styles.text1}>
            <p>
              O Curso Graph-it foi idealizado em meados de 2009 como um sonho,
              uma utopia, de seus fundadores, Francisco Marques (Chico) e
              William Tang (Will), então estudantes de publicidade e desde
              sempre apaixonados por desenho e arte em todas as suas
              manifestações tradicionais ou digitais.
            </p>
            <p>
              <span className={styles.italic}>
                “Pensávamos como seria fantástico, um lugar onde pudéssemos
                reunir pessoas apaixonadas por arte como nós, ensinar para elas
                tudo o que sabemos, um lugar onde os alunos pudessem se sentir
                verdadeiramente em casa.”{" "}
              </span>
              Palavras do Sócio fundador Francisco Marques.
            </p>
            <p>
              Chico e Will resolveram arriscar e fazer o sonho acontecer.
              Alugaram o local (uma loja no Centro de Petrópolis com 15 m²),
              pegaram um empréstimo e montaram o Curso Graph-it.
            </p>
          </h2>
          <h2 className={styles.text2}>
            <p>
              Hoje o Curso Graph-it conta com duas Unidades, uma no Centro de
              Petrópolis com 60 m² e uma em Itaipava. Ambas com ambientes
              climatizados, confortáveis e com toda a estrutura necessária para
              fazer a arte acontecer.
            </p>
            <p>
              Em toda a sua história a grande missão do Curso Graph-it sempre
              foi trazer as melhores novidades no ensino de artes e design, e
              entregar sempre um ensino com excelência. Fomos os pioneiros no
              ensino de Modelagem e Animação em 3D, Escultura Digital e Edição
              de Vídeo, dentre muitos outros.
            </p>
            <p>
              Hoje agregamos mais de 10 cursos voltados para as áreas de arte,
              design, animação, arquitetura e fotografia, sempre mantendo o
              altíssimo nível de excelência que nos conduz a mais de uma década
              de sucesso, e o mais importante, mantendo sempre o mesmo amor pelo
              que fazemos.
            </p>
          </h2>
        </div>
      </div>
    </>
  );
}
