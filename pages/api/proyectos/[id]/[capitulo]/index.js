import dbConnect from "../../../../../lib/dbConnect";
import Proyecto from "../../../../../models/Proyecto";
import Capitulo from "../../../../../models/Capitulo";

export default async function handler(req, res) {
	const { method } = req;
	const { id, capitulo } = req.query;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const proyectoEncontrado = await Proyecto.findById(id);
				const capituloEncontrado = proyectoEncontrado.capitulos.find((cap) => {
					return cap._id.toString() === capitulo;
				});
				const [capituloTeoricoEncontrado] = await Capitulo.find({
					nombre: capituloEncontrado.nombre,
				});
				res.status(200).json({
					data: {
						proyecto: {
							nombre: proyectoEncontrado.nombre,
							color: proyectoEncontrado.color,
						},
						capitulo: capituloEncontrado,
						capitulo_teorico: capituloTeoricoEncontrado,
					},
				});
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "PUT":
			try {
				const proyecto = await Proyecto.update(
					{
						_id: id,
						"capitulos._id": capitulo,
					},
					{ $set: { "capitulos.$": { ...req.body } } }
				);
				res.status(200).json({ data: proyecto });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
