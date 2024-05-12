"use client";
import { Button, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import styles from "./status.module.scss";
import { fetchStatus } from "@/redux/slice/statusSlicer/statusSlice";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Status() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((store) => store.status.status);
  const loading = useAppSelector((store) => store.status.loading);

  const { register, handleSubmit } = useForm<FormStatus>({
    mode: "onBlur",
  });
  interface FormStatus {
    status: string;
  }

  const submitStatusCode: SubmitHandler<FormStatus> = (data) => {
    const queryStatus = `search_key=${data.status}`;
    dispatch(fetchStatus(queryStatus));
  };

  return (
    <div>
      {loading === "rejected" && (
        <p className={styles.message}>
          Не удалось получить статус заказа, попробуйте позже или обратитесь по
          контактному номеру
        </p>
      )}
      {loading === "fulfilled" && (
        <p className={styles.message}>{status.status}</p>
      )}
      {loading === "pending" && (
        <form
          className={styles.orderStatusChecker}
          onSubmit={handleSubmit(submitStatusCode)}
        >
          <TextField
            label="Номер заказа"
            style={{ backgroundColor: "rgba(238, 240, 241, 0.5)" }}
            {...register("status", {
              required: true,
            })}
          />
          <Button type="submit" variant="outlined">
            Отправить
          </Button>
        </form>
      )}
    </div>
  );
}
