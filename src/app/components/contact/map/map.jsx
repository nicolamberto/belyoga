'use client'

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { icon } from "leaflet";
import logo from '@/app/lib/logo.png'



export default function Map() {
    const position = [51.505, -0.09]; // Cambia esto a la ubicación que desees


    return (
        <div className=" rounded-[30px] w-[300px] h-[350px] overflow-hidden">
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </div>

    );
};