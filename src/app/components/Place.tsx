import styles from "./Place.module.css";

export default function Place() {
  return (
    <>
      <div className={styles.bg}>
        <h1>
          UM LOCAL ACONCHEGANTE, MATERIAIS DE DESENHO, COMPUTADORES
          <br /> E UM MONTE DE GENTE APAIXONADA POR ARTE!
        </h1>
        <img className={styles.img} src="/icon_heart.png" />
      </div>
    </>
  );
}
