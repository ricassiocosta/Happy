import React from "react"
import { Link } from "react-router-dom"
import { FiArrowRight, FiPlus } from "react-icons/fi"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css"

import mapMarkerImg from "../images/Local.svg"

import "../styles/pages/orphanages-map.css"

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita ;D</p>
        </header>

        <footer>
          <strong>Fortaleza</strong>
          <span>Ceará</span>
        </footer>
      </aside>

      <Map
        center={[-3.7354988, -38.5154298]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-3.7354988, -38.5154298]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar dos anjos
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="add-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
