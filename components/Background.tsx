"use client";

import React, { useEffect, useState } from "react";
import Toast from "./ui/Toast";

const Background = () => {
	const [liveVideoId, setLiveVideoId] = useState(null);
	const [fetchLiveVideo, setFetchLiveVideo] = useState(false);

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

		// Realice la llamada a la API solo si se ha indicado que se debe hacer
		if (fetchLiveVideo) {
			fetchLiveVideo();
		}
	}, [fetchLiveVideo]);

	return (
		<div className="bg-contain sticky top-0 h-screen">
			{liveVideoId ? (
				// Si se encuentra un video en vivo, muestre la transmisión
				<iframe
					src={`https://www.youtube.com/embed/${liveVideoId}`}
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			) : (
				<>
					<Toast
						title="HALFBAKED in LesEnfants, Barcelona"
						description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, debitis tenetur sit incidunt eius consequatur earum rerum vel"
						style="absolute left-4 top-3/4 px-2 py-4"
						styleExpanded="w-60 h-fit top-20"
						styleContracted="w-48 h-16"
					/>
					<video autoPlay muted loop id="teaser" className='h-full w-full object-cover'>
						<source src="/teaser.mov" type="video/mp4" />
					</video>
				</>
			)}
		</div>
	);
};

export default Background;
