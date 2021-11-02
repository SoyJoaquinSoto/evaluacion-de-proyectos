import mongoose from "mongoose";

const ProyectoSchema = new mongoose.Schema({
	nombre: String,
	color: String,
	capitulos: [
		{
			nombre: String,
			ruta: String,
			indicadores: [
				{
					nombre: String,
					subindicadores: [
						{
							nombre: String,
							calificacion: Number,
						},
					],
				},
			],
		},
	],
});

module.exports =
	mongoose.models.Proyecto || mongoose.model("Proyecto", ProyectoSchema);
