import Link from "next/link";

function Dashboard({ proyectos }) {
	return (
		<div className="grid grid-cols-4 w-full h-full gap-6">
			{proyectos &&
				proyectos.map((proyecto) => (
					<button
						key={proyecto._id}
						className={`h-56 rounded-lg transition duration-75 hover:scale-95 hover:rotate-2 cursor-pointer`}
						style={{ backgroundColor: `rgba(${proyecto.color})` }}
					>
						<Link href={`proyectos/${proyecto._id}`}>
							<div className="flex flex-col justify-center items-center gap-4 text-center">
								<h3 className="text-6xl font-thin">
									{proyecto.nombre[0].toUpperCase()}
								</h3>
								<p className="font-thin">{proyecto.nombre}</p>
							</div>
						</Link>
					</button>
				))}
		</div>
	);
}

export default Dashboard;
