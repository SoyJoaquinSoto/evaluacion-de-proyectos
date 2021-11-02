import { proyecto_vacio } from "../../../models/proyecto_vacio";
import dbConnect from "../../../lib/dbConnect";
import Proyecto from "../../../models/Proyecto";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

export default async function allProyectos(req, res) {
	const { method } = req;

	// const proyectos = [
	// 	{ id: 1, nombre: "Kru dashboard", color: "254, 226, 226, 1" },
	// 	{ id: 2, nombre: "Tanglee E-Shop", color: "254, 243, 199, 1" },
	// 	{ id: 3, nombre: "Ero Notes App", color: "219, 234, 254, 1" },
	// 	{ id: 4, nombre: "Solid UI Kit", color: "252, 231, 243, 1" },
	// 	{ id: 5, nombre: "Art Dashboard", color: "237, 233, 254, 1" },
	// 	{ id: 6, nombre: "Hrt Dashboard", color: "209, 250, 229, 1" },
	// 	{ id: 7, nombre: "Trt Dashboard", color: "254, 226, 226, 1" },
	// 	{ id: 8, nombre: "Lrt Dashboard", color: "243, 244, 246, 1" },
	// ];

	await dbConnect();

	switch (method) {
		case "GET":
			const proyectos = await Proyecto.find({});
			res.status(200).json(proyectos);
			break;
		case "POST":
			const { nombre } = req.body;
			if (!nombre) {
				res.status(400).json({ success: false });
				return;
			}
			try {
				const color = `${getRandomInt(257)}, ${getRandomInt(
					257
				)}, ${getRandomInt(257)}, 1`;
				const proyecto_creado = new Proyecto({
					...proyecto_vacio,
					nombre,
					color,
				});
				proyecto_creado.save();
				res.status(200).json({ data: proyecto_creado });
			} catch (error) {
				console.log(error);
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
