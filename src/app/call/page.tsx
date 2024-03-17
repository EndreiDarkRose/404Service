"use client";

import React from "react";
import styles from "./call.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Call() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitData = (data) => {
    axios
      .post(`https://65e7001353d564627a8d9655.mockapi.io/User`, data)
      .then((response) => {
        console.log("Успешно отправлено:", response.data);
      })
      .catch((error) => {
        console.error("Ошибка при отправке:", error);
      });
    reset();
  };
  return (
    <form className={styles.inputSection} onSubmit={handleSubmit(onSubmitData)}>
      <input
        placeholder="Ваше имя"
        {...register("name", {
          required: true,
        })}
      />
      <div>{errors?.name && <p className={styles.message}>Ведите имя</p>}</div>
      <input
        type="number"
        inputMode="numeric"
        placeholder="Номер телефона"
        {...register("phoneNumber", {
          required: true,
          minLength: 11,
        })}
      />
      <div>
        {errors?.phoneNumber && (
          <p className={styles.message}>Неправильно набран номер</p>
        )}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}
