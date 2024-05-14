import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { FormData } from "@/types/serviceListInterface";
import styles from "./call.module.scss";

type CallFormProps = {
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

function CallForm({ setFormSubmitted }: CallFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmitData: SubmitHandler<FormData> = async (data) => {
    const fromResponse = `name=${data.name}&phone_number=${data.phone_number}&description=${data.description}`;
    try {
      const response = await axios.post(
        `https://404service.ru/api/v1/orders/create`,
        fromResponse,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.NDA0.HxeuhZe-IYGPIZfse-9fMorZXq_UdKZg8iLixTempVA",
          },
        }
      );
      reset();
      setFormSubmitted(true);
    } catch (error) {
      alert(`Ошибка при отправке:${error}`);
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
        {...register("phone_number", {
          required: true,
          pattern: /^\+?[0-9]*$/,
          minLength: 11,
        })}
      />
      <div>
        {errors?.phone_number && (
          <p className={styles.message}>Неправильно набран номер</p>
        )}
      </div>
      <TextField
        label={`Причина обращения(необязательно)`}
        multiline
        rows={2}
        margin="dense"
        style={{ backgroundColor: "rgba(238, 240, 241, 0.5)" }}
        {...register("description", {})}
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
              href="https://docs.google.com/document/d/1hdpmw0DCc6S5OjUyZHKDREjRq0a9sDk31N1-qmIAEM8/edit"
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
