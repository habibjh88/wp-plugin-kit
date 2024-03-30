/**
 * External dependencies.
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies.
 */
import { endpoint } from './endpoint';

const controls = {
	FETCH_FROM_API( action: any ) {
		return apiFetch( { path: action.path } );
	},

	ADD_ITEM( action: any ) {
		return apiFetch( {
			path: endpoint,
			method: 'POST',
			data: action.payload,
		} );
	},

	UPDATE_ITEM( action: any ) {
		const path = endpoint + '/' + action.payload.id;
		return apiFetch( { path, method: 'PUT', data: action.payload } );
	},

	DELETE_ITEM( action: any ) {
		const path = endpoint;
		return apiFetch( { path, method: 'DELETE', data: action.payload } );
	},
};

export default controls;
