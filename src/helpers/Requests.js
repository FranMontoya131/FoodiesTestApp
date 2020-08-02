
import { base, getAuth, postAuth } from '../config/paths';

export const Req = async(method, path, queryParam, elem, body) => {

	if(!method && !path)
		return { status: 500, cause: 'Debe proporcionar un method y un path'};

	switch ( method ) {
		case 'get':
			try {
				if(elem || elem == ''){

					let fetchString = '';

					if(Array.isArray(elem) && Array.isArray(queryParam)) {
						fetchString = '/?' + queryParam[0] + '=' + elem[0] + '&' + queryParam[1] + '=' + elem[1];
					}else{
						fetchString = (elem) ? ('/?' + queryParam + '=' + elem) : null;
					}
					
					
					const r = (fetchString) ? base + path + fetchString : base + path;
					
					const response = await fetch(r, getAuth());
					const data = await response.json();

					if(data){
						return { status: 200, data};
					}else{
						return { status: 500, cause: 'No hay datos'}
					}

				}else{
					return { status: 500, cause: 'Verifique el envio de los parametros'};
				}
			} catch (error) {
				return { status: 500, cause: error};
			}
		break;

		case 'post':
			try {
				if(body){
					const response = await fetch(base + path, postAuth(body));
					const data = await response.json();

					if(data){
						return { status: 200, data};
					}else{
						return { status: 200, cause: 'No hay datos'};	
					}
				}else{
					return { status: 500, cause: 'Verifique el envio del body'};
				}
			} catch (error) {
				return { status: 500, cause: error};
			}
		break;

		default:
			return 'No es un metodo admitido';
		break;
	}
}