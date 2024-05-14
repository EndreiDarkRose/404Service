"use client";
import React, { useEffect } from "react";
import styles from "./services.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchPriceList } from "@/redux/slice/priceListSlicer/slicePriceList";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import RepairPricing from "@/components/repairPricing/RepairPricing";
import { JSONData } from "@/types/serviceListInterface";
import Loading from "../loading";

const Services = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const loading = useAppSelector((state) => state.priceList.loading);

  const servicesList: JSONData = useAppSelector(
    (state) => state.priceList.priceList
  );

  const dispatch = useAppDispatch();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    dispatch(fetchPriceList());
  }, [dispatch]);

  return (
    <>
      {loading === "pending" && <Loading />}
      {loading === "fulfilled" && (
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
      )}
      {loading === "rejected" && (
        <p className={styles.errorMessage}>
          Не удалось получить список услуг, повторите попытку позже или
          обратитесь по контактному номеру.
        </p>
      )}
    </>
  );
};

export default Services;
