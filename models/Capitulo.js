import mongoose from "mongoose";

const CapituloSchema = new mongoose.Schema({
	nombre: String,
	indicadores: [
		{
			nombre: String,
			subindicadores: [
				{
					nombre: String,
					descripcion: String,
					recomendacion: String,
					relevancia: Number,
					calificacion_max: Number,
					limite: Number,
				},
			],
		},
	],
});

module.exports =
	mongoose.models.Capitulo || mongoose.model("Capitulo", CapituloSchema);
