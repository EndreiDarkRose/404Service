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
const page = () => {
  return (
    <div>
      <p>Компьютерный сервис 404 - это:</p>
      <ul>
        <li>
          <GradeIcon />
          <p>
            <span>Мы входим в топ 3 </span>сервисных центров Читы
          </p>
        </li>
        <li>
          <VerifiedIcon />
          <p>
            <span>Квалифицированные инженеры.</span> Мы не кучка студентов, наши
            инженеры регулярно проходят сертификацию
          </p>
        </li>
        <li>
          <CurrencyRubleIcon />
          <p>
            <span>Адекватные цены.</span>Мы не предлагаем "бесплатный сыр", но и
            не завышаем цены на ремонт.
          </p>
        </li>
        <li>
          <AddCardIcon />
          <p>
            <span>Никаких скрытых платежей.</span>Четкое ценообразование на
            услуги и комплектующие. Работем по прайс-листу
          </p>
        </li>
        <li>
          <HandshakeIcon />
          <p>
            <span>Без вымеленных работ.</span>Мы не навязаем лишних услуг
          </p>
        </li>
        <li>
          <VerifiedUserIcon />
          <p>
            <span>Гарантия на работы.</span>На все свои услуги мы даем гарантию
            от 3-х месяцев.
          </p>
        </li>
        <li>
          <LocalShippingIcon />
          <p>
            <span>Бесплатная доставка в сервис-центр.</span>Мы заберем Вашу
            малогабаритную технику в ремонт совершенно бесплатно.
          </p>
        </li>
        <li>
          <MoreTimeIcon />
          <p>
            <span>Срочный ремонт.</span>Мы принимаем технику в срочный ремонт.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default page;
