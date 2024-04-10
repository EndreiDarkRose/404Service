"use client";
import { Button, TextField } from "@mui/material";

import styles from "./status.module.scss";
export default function Status() {
  return (
    <form className={styles.orderStatusChecker}>
      <TextField
        label="Номер заказа"
        style={{ backgroundColor: "rgba(238, 240, 241, 0.5)" }}
      />
      <Button type="submit" variant="outlined">
        Отправить
      </Button>
    </form>
  );
}
