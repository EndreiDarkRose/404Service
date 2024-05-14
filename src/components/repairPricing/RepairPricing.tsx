import React from "react";
import styles from "./repairPricing.module.scss";

const RepairPricing = () => {
  return (
    <div className={styles.repairPricingContainer}>
      <p className={styles.repairPricingInfo}>Повышающие коэффициенты:</p>
      <ul className={styles.repairTermsList}>
        <li>Наценка на срочный ремонт (ремонт начинается немедленно) — 50%.</li>
        <li>
          Наценка на ремонт техники после неквалифицированного ремонта — 25%.
        </li>
      </ul>
      <p className={styles.repairPricingInfo}>Внимание:</p>
      <ul className={styles.repairTermsList}>
        <li>Стоимость диагностики включена в общую стоимость работ.</li>
        <li>
          В случае отказа от ремонта, клиент оплачивает стоимость диагностики.
        </li>
        <li>При невозможности ремонта стоимость диагностики не взимается.</li>
        <li>
          Стоимость ремонта не включает в себя стоимость запчастей и
          комплектующих.
        </li>
      </ul>
    </div>
  );
};

export default RepairPricing;
