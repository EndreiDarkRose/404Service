import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <p>+7 914-364-04-04</p>
      <Link href="/">
        <div
          className={styles.logo}
          style={{ position: "relative", width: "300px", height: "80px" }}
        >
          <Image
            src="/404logo.png"
            alt="404 Logo"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
