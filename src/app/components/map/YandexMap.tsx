"use client";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { Placemark } from "@pbe/react-yandex-maps";
import React from "react";

const YandexMap = () => {
  return (
    <YMaps>
      <Map
        width="100%"
        defaultState={{
          center: [52.028380828855774, 113.5011511534117],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          properties={{
            iconCaption: "404 Service",
          }}
          defaultGeometry={[52.028380828855774, 113.5011511534117]}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
