"use client";

import React from "react";
import { useEffect, useState } from "react";

const Background = () => {
  const [liveVideoId, setLiveVideoId] = useState(null);

  useEffect(() => {
    async function fetchLiveVideo() {
      // Aquí debe colocar la ID de su canal de YouTube
      const channelId = process.env.NEXT_CHANNEL_ID_YOUTUBE;
      const apiKey = process.env.NEXT_API_KEY_YOUTUBE;

      // Realice una solicitud a la API de YouTube para obtener la lista de videos en vivo
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=id&type=video&eventType=live&channelId=${channelId}&key=${apiKey}`
      );
      const data = await response.json();

      // Si se encuentra un video en vivo, obtenga la ID del primer video de la lista
      if (data.items && data.items.length > 0) {
        setLiveVideoId(data.items[0].id.videoId);
      }
    }

    fetchLiveVideo();
  }, []);

  return (
    <div className="flex justify-center items-center mt-4">
      {liveVideoId ? (
        // Si se encuentra un video en vivo, muestre la transmisión
        <iframe
          src={`https://www.youtube.com/embed/${liveVideoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        // Si no se encuentra un video en vivo, muestre slider
        // <Slider widthImage={3000} />

        <video autoPlay muted loop id="teaser">
          <source src="/teaser.mov" type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Background;
