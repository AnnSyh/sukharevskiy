import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { YMaps, Map, Placemark, Panorama } from "@pbe/react-yandex-maps";

const MapSection = ({}) => {
  const contacts = [
    {
      id: 1,
      name: "Служба поддержки водителей",
      coords: [55.757131068980215, 37.61711450000001],
      src: "./images/icons/icon-clock.svg",
      address:
        "м. Охотный ряд, ул.Охотный ряд., д. 2, ТГ «Модный сезон», 2 этаж",
      time: "Пн-Вс: с 10:00 до 22:00",
      phone: "8 (800) 250 93 36",
    },
    {
      id: 2,
      name: "Коммерческий отдел",
      coords: [55.74916156898958, 37.53974249999992],
      src: "./images/icons/icon-clock.svg",
      address:
        "м. Деловой центр, Пресненская наб., д. 2, ТРЦ «АФИМОЛЛ Сити», 3 этаж ",
      time: "Вс-Чт: с 10:00 до 22:00, Пт-Сб: с 10:00 до 23:00",
      phone: "8 (800) 250 93 36",
    },
    {
      id: 3,
      name: "Пресс-служба",
      coords: [55.691963069051084, 37.527965499999965],
      src: "./images/icons/icon-clock.svg",
      address: "м. Университет, пр-т Вернадского, д. 6, ТЦ «Капитолий», 2 этаж",
      time: "Пн-Вс: с 10:00 до 22:00",
      phone: "8 (800) 250 93 36",
    },
  ];

  return (
    <Box component="section" sx={{ height: "100%", minHeight: "300px" }}>
      {/* <YMaps>
        <Panorama defaultPoint={[55.751574, 37.573856]} />
      </YMaps>
      1111111 */}
      <YMaps
        query={{
          ns: "use-load-option",
          load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon,geoObject.addon.hint",
        }}
      >
        {/* <Panorama defaultPoint={[55.751574, 37.573856]} /> */}
        <Map
          className="contacts-map"
          width="100%"
          height="100%"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 10,
            controls: ["zoomControl", "fullscreenControl"],
          }}
        >
          {contacts.map((item, i) => (
            <Placemark
              key={i}
              options={{
                // preset: "islands#circleIcon", // список темплейтов на сайте яндекса
                // iconColor: "green", // цвет иконки, можно также задавать в hex
                iconLayout: "default#image",
                iconImageHref: "./images/icons/icon-electric-car-2.svg", // Своё изображение иконки метки.
                iconImageSize: [30, 30], // Размеры метки.
                iconImageOffset: [-12, 0], // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
                hideIconOnBalloonOpen: false, // не скрываем метку на карте при открытии балуна
              }}
              defaultGeometry={item.coords}
              properties={{
                iconContent: `${item.id}`,
                hintContent: `<b> ${item.name} </b>`,
                balloonContentHeader: `<img src=${item.src} width="100%" height='50px'>`,
                balloonContentBody:
                  ` <div className="item-place-title">${item.name}</div>` +
                  `<div className="item-place-address">${item.address}</div>` +
                  `<div className="item-place-time">${item.time}</div>`,
              }}
              onClick={() => {
                console.log(`Click balloon ${item.name}`);
              }}
            />
          ))}
        </Map>
      </YMaps>
    </Box>
  );
};

export { MapSection };
