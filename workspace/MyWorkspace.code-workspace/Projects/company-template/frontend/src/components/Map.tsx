'use client';
import {
	APIProvider,
	Map,
	AdvancedMarker,
	Marker,
	MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

type Poi = { key: string; location: google.maps.LatLngLiteral };

const location: Poi = {
	key: 'Headquarters at Keizersgracht 434, 1018, Amsterdam, Netherlands',
	location: { lat: 52.3719706, lng: 4.8851372 },
};

export default function GoogleMaps() {
	const [openInfoWindow, setOpenInfoWindow] = useState(false);

	return (
		<APIProvider
			apiKey={'AIzaSyCB9eotAhX_DhWJ1WNaabfQvCIMdf1BNfY'}
			onLoad={() => console.log('Maps API has loaded.')}
		>
			<Map
				defaultZoom={17}
				mapId="f7feb84f49b3f7b0"
				defaultCenter={{ lat: 52.3719706, lng: 4.8851372 }}
				onCameraChanged={(ev: MapCameraChangedEvent) =>
					console.log(
						'camera changed:',
						ev.detail.center,
						'zoom:',
						ev.detail.zoom
					)
				}
			>
				<AdvancedMarker key={location.key} position={location.location}>
					<Marker
						position={location.location}
						title={location.key}
						onClick={e => {
							setOpenInfoWindow(!openInfoWindow);
						}}
					/>
				</AdvancedMarker>
			</Map>
		</APIProvider>
	);
}
