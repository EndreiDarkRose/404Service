import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./not-found.module.scss";
const NotFound = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>Страница не найдена</p>
      <Link href="/">
        <Button variant="outlined">Назад</Button>
      </Link>
    </div>
  );
};

export default NotFound;
