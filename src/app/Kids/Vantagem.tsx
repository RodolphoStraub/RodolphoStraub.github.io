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
          <h2>(1h / semana)</h2>
          <h2>(a partir dos 6 aos 10 anos de idade)</h2>
          <h2>Centro - Mensalidade: R$125,00 + R$85,00 da matrícula</h2>
          <h2>Itaipava - Mensalidade: R$160,00 + R$85,00 da matrícula</h2>
          <button className={styles.button}>Agende sua aula</button>
        </div>
      </div>
    </div>
  );
}
