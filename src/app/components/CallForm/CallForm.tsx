import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

import styles from "./call.module.scss";

function CallForm({ setFormSubmitted }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitData = async (data) => {
    try {
      const response = await axios.post(
        `https://65e7001353d564627a8d9655.mockapi.io/User`,
        data
      );
      console.log("Успешно отправлено:", response.data);
      reset();
      setFormSubmitted(true);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  React.useEffect(() => {
    const asteriskElement = document.querySelector(
      ".MuiFormControlLabel-asterisk"
    );
    if (asteriskElement) {
      asteriskElement.remove();
    }
  }, []);

  return (
    <form className={styles.inputSection} onSubmit={handleSubmit(onSubmitData)}>
      <TextField
        label="Ваше имя"
        variant="outlined"
        margin="dense"
        sx={{ borderRadius: 12 }}
        {...register("name", {
          required: true,
        })}
      />
      <div>{errors?.name && <p className={styles.message}>Ведите имя</p>}</div>
      <TextField
        label="Номер телефона"
        variant="outlined"
        type="text"
        inputMode="numeric"
        margin="dense"
        {...register("phoneNumber", {
          required: true,
          pattern: /^[0-9]*$/,
          minLength: 11,
        })}
      />
      <div>
        {errors?.phoneNumber && (
          <p className={styles.message}>Неправильно набран номер</p>
        )}
      </div>
      <TextField
        label={`Причина обращения(необязательно)`}
        multiline
        rows={2}
        margin="dense"
        style={{ backgroundColor: "rgba(238, 240, 241, 0.5)" }}
        {...register("reason", {})}
      />
      <FormControlLabel
        required
        control={<Checkbox />}
        style={{ padding: "5px 0" }}
        label={
          <p>
            Согласен(а) на обработку{" "}
            <a
              className="personalData"
              href="/policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              персональных данных
            </a>
          </p>
        }
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
}

export default CallForm;
