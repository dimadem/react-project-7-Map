import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import mapboxgl from "mapbox-gl";
import "./styles.css";

function App() {
  const [marker, setMarker] = useState([37.6173, 55.7558]);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGltYWRlbSIsImEiOiJjbDYwd3Q3OW0wMWNrM2pwbnc5NGk2eGo2In0.GxFLHa7q2lhtP18ui867gQ";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.6173, 55.7558],
      zoom: 12
    });

    //Starting point for Marker
    const marker = new mapboxgl.Marker()
      .setLngLat([37.6173, 55.7558]) //center
      .addTo(map);

    setMarker(marker);
  }, []);

  function handleChangeOption(event) {
    const point = event.target.value;
    marker.setLngLat(stores.[point]);
    console.log(point)
  }

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  //console

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleChangeOption}>
          <option>-</option>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));

/*
3. Настройте перенос маркера при выборе 
опции через marker.setLngLat().

Подсказка: У колбэк-функции внутри onChange 
должен быть доступ к marker.


*/
