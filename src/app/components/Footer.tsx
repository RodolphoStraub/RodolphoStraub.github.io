import styles from "./Footer.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <div id="Footer" className={styles.main_container}>
      <div className={styles.sub_container}>
        <div className={styles.title}>
          <img src="/icon_logo2.png" alt="logo" />
        </div>
        <div className={styles.unities}>
          <div className={styles.unity_decor1}>
            <h2>CENTRO - PETRÓPOLIS - RJ</h2>
            <h3>
              Ed. Marchese - Rua do Imperador, nº 772 slj 21 e 23, CEP 25620-001
            </h3>
            <div className={styles.sub_unity}>
              <div className={styles.inter_unity}>
                <h3>
                  {" "}
                  <img src="/phone_icon.svg" alt="icon telefone" />
                  (24)2231-5610
                </h3>
              </div>
              <div className={styles.inter_unity}>
                <h3>
                  <img src="/whatsapp_icon.svg" alt="icon telefone" />
                  (24)99220-2214
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.unity_decor2}>
            <h2>ITAIPAVA - PETRÓPOLIS - RJ</h2>
            <h3>
              Shopping 2000, Estrada União e Indústria, n° 11590 A, loja 05, CEP
              25730-745
            </h3>
            <div className={styles.sub_unity}>
              <div className={styles.inter_unity}>
                <h3><img src="/phone_icon.svg" alt="icon telefone" />(24)2231-5610</h3>
              </div>
              <div className={styles.inter_unity}>
                <h3><img src="/whatsapp_icon.svg" alt="icon telefone" />(24)99220-2214</h3>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.about_price}>
          CADA UNIDADE TEM A SUA PRÓPRIA TABELA DE PREÇO E OPÇÕES DE CURSOS.
        </h2>
        <div className={styles.container_icons}>
          <div className={styles.sub_icons}>
            <Link
              href={"https://www.instagram.com/graphitartesvisuais/"}
              target="blank"
            >
              <img
                className={styles.icons}
                src="/icons8-instagram.svg"
                alt="logo instagram"
              />
            </Link>
          </div>
          <div className={styles.sub_icons}>
            <Link
              href={"https://www.facebook.com/graphitartesvisuais/"}
              target="blank"
            >
              <img
                className={styles.icons}
                src="icons8-facebook.svg"
                alt="logo facebook"
              />
            </Link>
          </div>
          <div className={styles.sub_icons}>
            <Link
              href={
                "https://www.tiktok.com/@graphitartesvisuais?_t=8lpRdC30ocP&_r=1"
              }
              target="blank"
            >
              <img
                className={styles.icons}
                src="/icons8-tik-tok.svg"
                alt="logo tik tok"
              />
            </Link>
          </div>
          <div className={styles.sub_icons}>
            <Link href={"https://www.youtube.com/@graph-it8961"} target="blank">
              <img
                className={styles.icons}
                src="/icons8-youtube.svg"
                alt="logo youtube"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
