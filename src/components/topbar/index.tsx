interface Props {
	label: string;
	children: any;
}

const Topbar = ( { label, children }: Props ) => {
	return (
		<div className="wp-plugin-kit-topbar">
			<div className="wp-plugin-kit-topbar-content flex justify-between items-center">
				<h2 className="wp-plugin-kit-topbar-label text-gray-900">
					{ label }
				</h2>
				<div className="wp-plugin-kit-topbar-action">{ children }</div>
			</div>
		</div>
	);
};

export default Topbar;
