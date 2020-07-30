export const base = 'https://api.elaniin.dev/api/';


export const getAuth = () => {
	return {
		method: 'GET',
		mode: 'cors',
		headers: {
			"content-type": "application/json"
		}
	};
  }
  
export const postAuth = (body) => {
	return {
		method: 'POST',
		mode: 'cors',
		headers: {
			'content-Type':'application/json'
		},
		body: JSON.stringify(body)
	};
}