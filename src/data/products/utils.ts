/**
 * Internal dependencies.
 */
import { IProduct } from '@interfaces/product';

export const prepareItemForSubmit = ( item: IProduct ) => {
	const data = {
		...item,
		category_ids: item.category_ids,
	};

	if ( item.is_active !== undefined ) {
		data.is_active = item.is_active;
	} else {
		data.is_active = 1;
	}

	return data;
};
