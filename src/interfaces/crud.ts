/**
 * Internal dependencies.
 */

export interface CrudState {

    /**
     * Item Form data.
     */
    form: object;

    /**
     * Is items isLoading.
     */
    isLoading: boolean;

    /**
     * Item isSaving or not.
     */
    isSaving: boolean;

    /**
     * Item deleting or not.
     */
    isDeleting: boolean;

    /**
     * Current page number of items.
     */
    currentPage: number;

    /**
     * Show number of items per page.
     */
    perPage: number;

    /**
     * All items as array of object.
     */
    items: Array<object>;

    /**
     * Count total number of items.
     */
    totalItems: number;

    /**
     * Count total page.
     */
    totalPages: number;

    /**
     * Item details.
     */
    currentItem: object;

    /**
     * Selected items for an action.
     */
    selectedItems: Array<number>;

    /**
     * Item list filter.
     */
    filters: object;

    /**
     * Item list error.
     */
    errors: object;
}