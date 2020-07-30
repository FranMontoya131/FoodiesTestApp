
import { base, getAuth, postAuth } from '../config/paths';

export const Req = async(method, path, elem, body) => {

	if(!method && !path)
		return { status: 500, cause: 'Debe proporcionar un method y un path'};

	switch ( method ) {
		case 'get':
			try {
				if(elem){
					const response = await fetch(base + path + elem, getAuth());
					const data = await response.json();

					if(data)
						return { status: 200, data};
				}else{
					return { status: 500, cause: 'Verifique el envio del body'};
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

					if(data)
						return { status: 200, data};
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