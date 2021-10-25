export default function allProyectos(req, res) {
	const proyectos = [
		{ id: 1, nombre: "Kru dashboard", color: "254, 226, 226, 1" },
		{ id: 2, nombre: "Tanglee E-Shop", color: "254, 243, 199, 1" },
		{ id: 3, nombre: "Ero Notes App", color: "219, 234, 254, 1" },
		{ id: 4, nombre: "Solid UI Kit", color: "252, 231, 243, 1" },
		{ id: 5, nombre: "Art Dashboard", color: "237, 233, 254, 1" },
		{ id: 6, nombre: "Hrt Dashboard", color: "209, 250, 229, 1" },
		{ id: 7, nombre: "Trt Dashboard", color: "254, 226, 226, 1" },
		{ id: 8, nombre: "Lrt Dashboard", color: "243, 244, 246, 1" },
	];

	res.status(200).json(proyectos);
}
