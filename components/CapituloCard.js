function CapituloCard({ capitulo_real, capitulo_teorico }) {
	let semaforo;

	if (capitulo_teorico) {
		semaforo = capitulo_real.indicadores.reduce(
			(acc, indicador, index) => {
				let subs = { grave: 0, bien: 0, riesgo: 0 };
				indicador.subindicadores.forEach((subindicador, ind) => {
					if (
						subindicador.calificacion >
						capitulo_teorico.indicadores[index].subindicadores[ind].limite
					) {
						subs.bien++;
						return;
					}

					if (
						subindicador.calificacion <
						capitulo_teorico.indicadores[index].subindicadores[ind].limite
					) {
						subs.grave++;
						return;
					}

					subs.riesgo++;
				});

				switch (
					Object.keys(subs).reduce((a, b) => (subs[a] > subs[b] ? a : b))
				) {
					case "grave":
						acc.grave++;
						break;
					case "riesgo":
						acc.riesgo++;
						break;
					case "bien":
						acc.bien++;
						break;
					default:
						break;
				}

				return acc;
			},
			{ grave: 0, riesgo: 0, bien: 0 }
		);
	}

	return (
		<div className="w-full h-full rounded-lg border-2 border-gray-300 flex flex-col justify-between p-1">
			<h3 className="text-sm font-bold">{capitulo_real.nombre}</h3>
			<div className="pl-3 flex flex-col text-xs">
				<div className="flex gap-3">
					<img src="/grave.svg" alt="" />
					<p>
						{semaforo?.grave >= 0 ? semaforo.grave : "-"} indicadores graves
					</p>
				</div>
				<div className="flex gap-3">
					<img src="/riesgo.svg" alt="" />
					<p>
						{semaforo?.riesgo >= 0 ? semaforo.riesgo : "-"} indicadores en
						riesgo
					</p>
				</div>
				<div className="flex gap-3">
					<img src="/bien.svg" alt="" />
					<p>
						{semaforo?.bien >= 0 ? semaforo.bien : "-"} indicadores en buen
						estado
					</p>
				</div>
			</div>
		</div>
	);
}

export default CapituloCard;
