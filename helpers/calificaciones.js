export const cal_proyecto = (proyecto) => {
	return proyecto.capitulos.reduce(
		(acc, capitulo) => acc + cal_capitulo(capitulo),
		0
	);
};

export const cal_capitulo = (capitulo) => {
	const calificacion = capitulo.indicadores.reduce(
		(acc, indicador) => acc + cal_indicador(indicador),
		0
	);

	return calificacion;
};

export const cal_indicador = (indicador) => {
	const calificacion = indicador.subindicadores.reduce(
		(acc, subindicador) => acc + subindicador.calificacion,
		0
	);

	return calificacion;
};

export const cal_max = (capitulos) => {
	const calificacion_max = capitulos.reduce(
		(acc, capitulo) =>
			acc +
			capitulo.indicadores.reduce(
				(acc2, indicador) =>
					acc2 +
					indicador.subindicadores.reduce(
						(acc3, subindicador) => acc3 + subindicador.calificacion_max,
						0
					),
				0
			),
		0
	);

	return calificacion_max;
};
