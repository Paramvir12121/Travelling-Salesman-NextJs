// app/api/route/OptimizedRoute.js
'use client'
import axios from 'axios';

export async function POST(req) {
  const { locations } = await req.json();

  // Construct the coordinates string for OSRM
  const coordinates = locations.map((loc) => `${loc.lng},${loc.lat}`).join(';');

  try {
    const response = await axios.get(
      `https://router.project-osrm.org/trip/v1/driving/${coordinates}`,
      {
        params: {
          overview: 'full',
          geometries: 'geojson',
        },
      }
    );

    if (response.data.trips && response.data.trips.length > 0) {
      const optimizedRoute = response.data.trips[0].geometry.coordinates.map(
        ([lng, lat]) => ({ lat, lng })
      );
      return new Response(JSON.stringify({ optimizedRoute }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ success: false }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
