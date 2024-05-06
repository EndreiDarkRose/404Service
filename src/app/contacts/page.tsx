import React from "react";
import YandexMap from "../components/map/YandexMap";
import Image from "next/image";
import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.address}>
          <Image src="/geo.png" alt="vk" width={110} height={110} />
          <p>Профсоюзная ул. 15</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://vk.com/compservice__chita" target="_blank">
            <Image src="/vk.png" alt="vk" width={150} height={150} />
          </a>
          <a href="https://vk.com/compservice__chita" target="_blank">
            <Image src="/instagram.png" alt="vk" width={130} height={130} />
          </a>
          <a href="https://vk.com/compservice__chita" target="_blank">
            <Image src="/tg.png" alt="vk" width={150} height={150} />
          </a>
        </div>
      </div>
      <YandexMap />
    </>
  );
};

export default Contacts;
