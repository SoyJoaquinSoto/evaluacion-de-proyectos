import dbConnect from "../../../lib/dbConnect";
import Capitulo from "../../../models/Capitulo";

export default async function allProyectos(req, res) {
	// const { method } = req;

	await dbConnect();

	const capitulos = await Capitulo.find({});
	res.status(200).json({ data: capitulos });

	// switch (method) {
	// 	case "GET":
	// 		const capitulos = await Capitulo.find({});
	// 		res.status(200).json(capitulos);
	// 		break;
	// 	case "POST":
	// 		try {
	// 			const proyecto_creado = new Capitulo(proyecto_vacio);
	// 			proyecto_creado.save();
	// 			res.status(200).json({ data: proyecto_creado });
	// 		} catch (error) {
	// 			console.log(error);
	// 			res.status(400).json({ success: false });
	// 		}
	// 		break;
	// 	default:
	// 		res.status(400).json({ success: false });
	// 		break;
	// }
}
