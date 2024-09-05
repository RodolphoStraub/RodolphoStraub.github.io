import styles from "./Vantagem.module.css";

export default function Vantagem() {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.vantagens}>
          <h1>Vantagens</h1>
          <ul>
            <li>Primeiro material gratuito</li>
            <li>Aula teste gratuita</li>
            <li>Material didático exclusivo</li>
            <li>Dias e horários flexíveis</li>
          </ul>
        </div>
        <div className={styles.info}>
          <h1>Informações sobre:</h1>
          <h2>(2h / semana)</h2>
          <h2>(a partir dos 11 anos de idade)</h2>
          <h2>Centro - Mensalidade: R$205,00 + R$85,00 da matrícula</h2>
          <h2>Itaipava - Mensalidade: R$250,00 + R$85,00 da matrícula</h2>
          <h2>Desconto de 20% para estudantes</h2>
          <button className={styles.button}>Agende sua aula</button>
        </div>
      </div>
    </div>
  );
}
