import './style.css'

import * as L from 'leaflet'
window.L = L

import 'leaflet-providers'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

const map = L.map('map').setView([51.505, -0.09], 13)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map)

L.tileLayer.provider('Thunderforest.SpinalMap').addTo(map)

const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [38, 38],
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
})

const myClusterLayer = L.markerClusterGroup({
  iconCreateFunction: function(cluster) {
    return L.divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    })
  }
})

const marker1 = L.marker([51.5, -0.09], { icon: customIcon }).bindPopup('Marker 1')
const marker2 = L.marker([51.51, -0.08], { icon: customIcon }).bindPopup('Marker 2')
const marker3 = L.marker([51.5, -0.1], { icon: customIcon }).bindPopup('Marker 3')

myClusterLayer.addLayer(marker1)
myClusterLayer.addLayer(marker2)
myClusterLayer.addLayer(marker3)

map.addLayer(myClusterLayer)
