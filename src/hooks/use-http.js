import { useState, useCallback } from 'react';

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [terror, setTerror] = useState('');
	const sendRequest = useCallback(async (configRequest, fnProcessData) => {
		try {
			const response = await fetch(configRequest.url, {
				method: configRequest.method ? configRequest.method : 'GET',
				headers: configRequest.headers ? configRequest.headers : {},
				body: configRequest.body ? JSON.stringify(configRequest.body) : null,
			});

			if (!response.ok) {
				throw new Error('ERROR: No se ha podido conectar con la BD!');
			}

			const data = await response.json();
			if (fnProcessData) fnProcessData(data);
		} catch (err) {
			setTerror(err.message || 'ERROR: Algo no ha salido bien :-(');
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		sendRequest,
		isLoading,
		terror,
	};
};

export default useHttp;
