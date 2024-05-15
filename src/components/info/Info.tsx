import React from "react";
import styles from "./info.module.scss";
import Link from "next/link";
import InfoLink from "../infoLink/InfoLink";
const Info = () => {
  const info = [
    {
      link: "services",
      title: "О наших услугах",
      description: "И их ценах",
    },
    {
      link: "call",
      title: "Заказать звонок",
      description: "Оператор свяжется с вами по телефону",
    },
    {
      link: "status",
      title: "Узнать статус заказа",
      description: "По номеру заказа",
    },
    {
      link: "contacts",
      title: "Контакты",
      description: "А так же наши соц. сети",
    },
  ];
  return (
    <nav className={styles.nav}>
      {info.map((infoItem, index) => (
        <Link href={`/${infoItem.link}`} key={index}>
          <InfoLink title={infoItem.title} description={infoItem.description} />
        </Link>
      ))}
    </nav>
  );
};

export default Info;
