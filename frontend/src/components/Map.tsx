'use client';
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Marker,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

export default function GoogleMaps() {
	const [openInfoWindow, setOpenInfoWindow] = useState(false);

	const location = {
		key: 'Headquarters at Keizersgracht 434, 1018, Amsterdam, Netherlands',
		location: { lat: 52.3719706, lng: 4.8851372 },
	};

	return (
		<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
			<Map
				defaultZoom={17}
				mapId="f7feb84f49b3f7b0"
				defaultCenter={{ lat: 52.3719706, lng: 4.8851372 }}
			>
				<AdvancedMarker key={location.key} position={location.location}>
					<Marker
						position={location.location}
						title={location.key}
						onClick={() => {
							setOpenInfoWindow(!openInfoWindow);
						}}
					/>
				</AdvancedMarker>
			</Map>
		</APIProvider>
	);
}
