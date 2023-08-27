export interface Location {
	place_id: number;
	licence: string;
	powered_by: string;
	osm_type: string;
	osm_id: number;
	lat: string;
	lon: string;
	display_name: string;
	address: Address;
	boundingbox: string[];
}

export interface Address {
	road: string;
	neighbourhood: string;
	quarter: string;
	suburb: string;
	city: string;
	state: string;
	postcode: string;
	country: string;
	country_code: string;
}

export function geolocateUser(): Promise<{ countryCode: string }> {
	return new Promise((resolve, reject) => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
						.then(async (res: Response) => {
							const json: Location = await res.json();
							const countryCode = json.address.country_code;
							resolve({ countryCode });
						})
						.catch((error) => reject(`Error fetching country code: ${error}`));
				},
				(error) => {
					reject(`Error fetching location: ${error}`);
				}
			);
		} else {
			reject('Geolocation is not supported by this browser.');
		}
	});
}
