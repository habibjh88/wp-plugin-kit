/**
 * All register api helper
 * @since 0.1.0
 */

/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
const namespace = 'wp-plugin-kit/v1';
const namespacePro = 'wp-plugin-kit-pro/v1';

const url = ( api: string, from: string ) => {
	if ( from === 'free' ) {
		return `/${ namespace }/${ api }`;
	} else if ( from === 'pro' ) {
		return `/${ namespacePro }/${ api }`;
	}
};

export const get = async ( api: string, args = '', from = 'free' ) => {
	const response = await apiFetch( {
		path: `${ url( api, from ) }/?${ args }`,
	} );

	if ( response.success ) {
		return response.data;
	}

	throw response.data.map( ( value: string ) => new Error( value ) );
};

export const getSingle = async ( api: string, id: number, from = 'free' ) => {
	const response = await apiFetch( {
		path: `${ url( api, from ) }/${ id }`,
	} );

	if ( response.success ) {
		return response.data;
	}

	throw response.data.map( ( value: string ) => new Error( value ) );
};

export const add = async ( api: string, data: object, from = 'free' ) => {
	const response = await apiFetch( {
		path: `${ url( api, from ) }`,
		method: 'POST',
		data,
	} );

	if ( response.success ) {
		return response.data;
	}

	throw response.data.map( ( value: string ) => new Error( value ) );
};

export const edit = async (
	api: string,
	id: string,
	data: object,
	from = 'free'
) => {
	const response = await apiFetch( {
		path: `${ url( api, from ) }/${ id }`,
		method: 'PUT',
		data,
	} );

	if ( response.success ) {
		return response.data;
	}

	throw response.data.map( ( value: string ) => new Error( value ) );
};

export const del = async ( api: string, id: string, from = 'free' ) => {
	const response = await apiFetch( {
		path: `${ url( api, from ) }/${ id }`,
		method: 'DELETE',
	} );

	if ( response.success ) {
		return response.data;
	}

	throw response.data.map( ( value: string ) => new Error( value ) );
};
