import { useState } from "react";

function Dashboard(props) {
	const [proyectos, setProyectos] = useState([
		{ id: 1, nombre: "Kru dashboard", color: "254, 226, 226, 1" },
		{ id: 2, nombre: "Tanglee E-Shop", color: "254, 243, 199, 1" },
		{ id: 3, nombre: "Ero Notes App", color: "219, 234, 254, 1" },
		{ id: 4, nombre: "Solid UI Kit", color: "252, 231, 243, 1" },
		{ id: 5, nombre: "Art Dashboard", color: "237, 233, 254, 1" },
		{ id: 6, nombre: "Hrt Dashboard", color: "209, 250, 229, 1" },
		{ id: 7, nombre: "Trt Dashboard", color: "254, 226, 226, 1" },
		{ id: 8, nombre: "Lrt Dashboard", color: "243, 244, 246, 1" },
	]);

	return (
		<div className="grid grid-cols-4 w-full h-full gap-6">
			{proyectos &&
				proyectos.map((proyecto) => (
					<div
						key={proyecto.id}
						className={`h-56 flex flex-col justify-center items-center gap-4 rounded-lg text-center transition duration-75 hover:scale-95 hover:rotate-2 cursor-pointer`}
						style={{ "background-color": `rgba(${proyecto.color})` }}
					>
						<h3 className="text-6xl font-thin">{proyecto.nombre[0]}</h3>
						<p className="">{proyecto.nombre}</p>
					</div>
				))}
		</div>
	);
}

export default Dashboard;
