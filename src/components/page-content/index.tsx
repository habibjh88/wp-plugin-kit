interface Props {
	className?: string;
	children: any;
}

const PageContent = ( { className = '', children }: Props ) => {
	return (
		<div className={ `wp-plugin-kit-content ${ className }` }>
			{ children }
		</div>
	);
};

export default PageContent;
