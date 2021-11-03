import dbConnect from "../../../lib/dbConnect";
import Proyecto from "../../../models/Proyecto";
import Capitulo from "../../../models/Capitulo";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

export default async function allProyectos(req, res) {
	const { method } = req;

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

				const capitulos = await Capitulo.find({});
				const proyecto_creado = new Proyecto({
					nombre,
					color,
					capitulos: capitulos.map((capitulo) => ({
						nombre: capitulo.nombre,
						indicadores: capitulo.indicadores.map((indicador) => ({
							nombre: indicador.nombre,
							subindicadores: indicador.subindicadores.map((subindicador) => ({
								nombre: subindicador.nombre,
								calificacion: 0,
							})),
						})),
					})),
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
