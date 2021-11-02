import dbConnect from "../../../../lib/dbConnect";
import Proyecto from "../../../../models/Proyecto";

export default async function handler(req, res) {
	const { method } = req;
	const { id } = req.query;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const proyectoEncontrado = await Proyecto.findById(id);
				res.status(200).json({
					data: {
						proyecto: proyectoEncontrado,
					},
				});
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
