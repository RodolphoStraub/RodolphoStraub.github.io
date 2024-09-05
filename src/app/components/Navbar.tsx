"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import styles from "./Navbar.module.css";


export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barinter}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.png"
              width={130}
              height={50}
              alt="logo"
              onClick={toggleNavbar}
            ></Image>
          </Link>
          <div className={styles.navbar}>
            <div className={styles.navbar_inter}>
              <Link className={styles.link} href="/Quem-Somos">
                Quem somos
              </Link>
              <Link className={styles.link} href="/#Cursos">
                Cursos
              </Link>
              <Link className={styles.link} href="#Footer">
                Contato
              </Link>
            </div>
          </div>
          <button className={styles.open_nav} onClick={toggleNavbar}>
            {isClick ? (
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0">
                  <rect
                    x="0"
                    y="0"
                    width="24.00"
                    height="24.00"
                    rx="0"
                    fill="#000"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_LG">
                    {" "}
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke="#ffc219"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="50px"
                height="50px"
                viewBox="-2.4 -3.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffc219"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  stroke-width="0"
                  transform="translate(0,0), scale(1)"
                >
                  <rect
                    x="-2.4"
                    y="-2.4"
                    width="28.80"
                    height="28.80"
                    rx="0"
                    fill="#000"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.048"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 18L20 18"
                    stroke="#ffc219"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 12L20 12"
                    stroke="#ffc219"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 6L20 6"
                    stroke="#ffc219"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
        </div>
        {isClick && (
          <div className={styles.hidden_nav}>
            <ul className={styles.barinter2}>
              <li>
                <Link
                  className={styles.link}
                  onClick={toggleNavbar}
                  href="/Quem-Somos"
                >
                  Quem somos
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  onClick={toggleNavbar}
                  href="/#Cursos"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  className={styles.link}
                  onClick={toggleNavbar}
                  href="#Footer"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
