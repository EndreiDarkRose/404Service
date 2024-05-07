import React from "react";
import YandexMap from "../components/map/YandexMap";
import Image from "next/image";
import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contacts}>
        <div className={styles.address}>
          <div className={styles.image}>
            <Image src="/geo.png" alt="vk" fill />
          </div>
          <p>Профсоюзная ул. 15</p>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.image}>
            <a href="https://vk.com/compservice__chita" target="_blank">
              <Image src="/vk.png" alt="vk" fill />
            </a>
          </div>

          <div className={styles.image}>
            <a href="https://vk.com/compservice__chita" target="_blank">
              <Image src="/instagram.png" alt="vk" fill />
            </a>
          </div>
          <div className={styles.image}>
            <a href="https://vk.com/compservice__chita" target="_blank">
              <Image src="/tg.png" alt="vk" fill />
            </a>
          </div>
        </div>
      </div>
      <YandexMap />
    </div>
  );
};

export default Contacts;
