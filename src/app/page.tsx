"use client";
import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import VerifiedIcon from "@mui/icons-material/Verified";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddCardIcon from "@mui/icons-material/AddCard";
import HandshakeIcon from "@mui/icons-material/Handshake";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import styles from "./page.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.serviceTitle}>
        Компьютерный сервис 404 в Чите - это:
      </h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <GradeIcon />
          <p className={styles.description}>
            <span>Мы входим в топ 3 </span>сервисных центров Читы.
          </p>
        </li>
        {/* <li className={styles.item}>
          <VerifiedIcon />
          <p className={styles.description}>
            <span>Квалифицированные инженеры.</span> Мы не кучка студентов, наши
            инженеры регулярно проходят сертификацию.
          </p>
        </li> */}
        <li className={styles.item}>
          <CurrencyRubleIcon />
          <p className={styles.description}>
            <span>Адекватные цены. </span>Мы не предлагаем &quot;бесплатный
            сыр&quot;, но и не завышаем цены на ремонт.
          </p>
        </li>
        <li className={styles.item}>
          <AddCardIcon />
          <p className={styles.description}>
            <span>Никаких скрытых платежей. </span>Четкое ценообразование на
            услуги и комплектующие. Работаем по прайс-листу.
          </p>
        </li>
        <li className={styles.item}>
          <HandshakeIcon />
          <p className={styles.description}>
            <span>Без вымышленных работ. </span>Мы не навязываем лишних услуг.
          </p>
        </li>
        <li className={styles.item}>
          <VerifiedUserIcon />
          <p className={styles.description}>
            <span>Гарантия на работы. </span>На все свои услуги мы даем гарантию
            от 3-х месяцев.
          </p>
        </li>
        <li className={styles.item}>
          <LocalShippingIcon />
          <p className={styles.description}>
            <span>Бесплатная доставка в сервис-центр. </span>Мы заберем Вашу
            малогабаритную технику в ремонт совершенно бесплатно.
          </p>
        </li>
        <li className={styles.item}>
          <MoreTimeIcon />
          <p className={styles.description}>
            <span>Срочный ремонт. </span>Мы принимаем технику в срочный ремонт.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Main;
