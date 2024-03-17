import React from "react";
import styles from "./services.module.scss";

const service = [
  {
    service: "Починить комп",
    price: "500 р.",
  },
  {
    service: "Починить комп",
    price: "500 р.",
  },
  {
    service: "Починить комп",
    price: "500 р.",
  },
  {
    service: "Починить комп",
    price: "500 р.",
  },
];
const Services = () => {
  return (
    <ul className={styles.serviceList}>
      {service.map((item) => (
        <li>
          {item.service} - {item.price}
        </li>
      ))}
    </ul>
  );
};

export default Services;
