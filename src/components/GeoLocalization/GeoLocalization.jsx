import './geoLocalization.css'
import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from 'react-i18next'

// Coordenadas objetivo (Castelldefels, Barcelona)
const targetLocation = { lat: 41.2833, lng: 1.9667 }

const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371 // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLng = (lng2 - lng1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const getRandomOffset = (range) => (Math.random() - 0.5) * range

const GeoLocalization = () => {
  const { t } = useTranslation()

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    console.error(
      'Falta la clave de API de Google Maps. Verifica tu archivo .env.'
    )
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  })

  const [userLocation, setUserLocation] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const offsetRange = 0.01

          const userLatLng = {
            lat: position.coords.latitude + getRandomOffset(offsetRange),
            lng: position.coords.longitude + getRandomOffset(offsetRange),
          }

          setUserLocation(userLatLng)

          const dist = calculateDistance(
            userLatLng.lat,
            userLatLng.lng,
            targetLocation.lat,
            targetLocation.lng
          )

          setMessage(
            dist <= 10
              ? t('close_message', { distance: dist.toFixed(2) })
              : t('far_message', { distance: dist.toFixed(2) })
          )
        },
        () => alert(t('not_location'))
      )
    } else {
      alert(t('not_supported'))
    }
  }, [t])

  if (!isLoaded) return <div>{t('Loading Map')}...</div>

  return (
    <div className="geo-container">
      <p className="map-message">
        {t('are_we_close')} {message}
      </p>
      <div className="map-container">
        <GoogleMap
          zoom={12}
          center={userLocation || targetLocation}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
          {userLocation && <Marker position={userLocation} />}
          <Marker position={targetLocation} />
        </GoogleMap>
      </div>
    </div>
  )
}

export default GeoLocalization
