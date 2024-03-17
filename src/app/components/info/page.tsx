import React from "react";
import styles from "./info.module.scss";
import Link from "next/link";
import InfoLink from "../InfoLink/page";
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
      description: "Мастер с вами свяжется и приедет к вам на дом",
    },
    {
      link: "status",
      title: "Статус услуги",
      description: "И их ценах",
    },
    {
      link: "contacts",
      title: "Контакты",
      description: "А так же наши соц. сети",
    },
    // {
    //   link: "orders",
    //   title: "Выполенные заказы",
    //   description: "Посмотрите ранее выполенные работы мастером",
    // },
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
