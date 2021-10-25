const Body = ({ children }) => {
	return (
		<div className="w-full overflow-y-auto relative py-10">
			<div className="w-10/12 mx-auto">{children}</div>
		</div>
	);
};

export default Body;
