"use client";
import React from "react";
import styles from "./services.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { servicesList } from "./serviceList";
import RepairPricing from "../components/RepairPricing/RepairPricing";

const Services = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.servicesAccordion}>
      <RepairPricing />

      {servicesList.map((item, index) => (
        <div key={index}>
          <Accordion
            className={styles.accordion}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <p>{item.category}</p>
            </AccordionSummary>
            <AccordionDetails>
              {item.service.map((service, serviceIndex) => (
                <p className={styles.details} key={serviceIndex}>
                  {service.title} - {service.price}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
      <p className={styles.disclaimerText}>
        Все указанные цены являются ознакомительными. Не является публичной
        офертой.
      </p>
    </div>
  );
};

export default Services;
