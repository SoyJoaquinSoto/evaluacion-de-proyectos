const Body = ({ children }) => {
	return (
		<div className="w-full overflow-y-scroll relative py-10">
			<div className="w-4/5 mx-auto">{children}</div>
		</div>
	);
};

export default Body;
