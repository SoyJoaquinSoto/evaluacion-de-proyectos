import { ResponsiveBar } from "@nivo/bar";
import { cal_indicador } from "../helpers/calificaciones";

function RecomendacionesCard({ capitulo_real, capitulo_teorico }) {
	return (
		<div className="w-full flex flex-row border-2 border-gray-300 rounded-lg p-2 h-96">
			<div className="flex flex-col gap-1 h-full w-2/5">
				<h3 className="font-bold">{capitulo_real.nombre}</h3>

				<ul className="pl-5 list-disc h-full overflow-y-scroll flex flex-col gap-3 pr-1">
					{capitulo_real.indicadores.map((indicador, index) => (
						<li key={indicador.nombre}>
							<h4 className="">{indicador.nombre}</h4>
							<ul className="pl-5 text-sm list-disc list-inside flex flex-col gap-1">
								{indicador.subindicadores.map((subindicador, ind) => {
									if (
										subindicador.calificacion <=
											capitulo_teorico?.indicadores[index].subindicadores[ind]
												.limite &&
										capitulo_teorico?.indicadores[index].subindicadores[ind]
											.recomendacion
									) {
										return (
											<li key={subindicador.nombre}>
												{
													capitulo_teorico.indicadores[index].subindicadores[
														ind
													].recomendacion
												}
											</li>
										);
									}
									return "";
								})}
							</ul>
						</li>
					))}
				</ul>
			</div>
			<div className="w-3/5">
				<ResponsiveBar
					data={capitulo_real.indicadores.reduce((acc, indicador) => {
						let data = { indicador: indicador.nombre };
						data["calificación"] = cal_indicador(indicador);
						return [...acc, data];
					}, [])}
					keys={["calificación"]}
					indexBy="indicador"
					groupMode="stacked"
					margin={{ top: 0, right: 10, bottom: 50, left: 150 }}
					padding={0.3}
					layout="horizontal"
					valueScale={{ type: "linear" }}
					indexScale={{ type: "band", round: true }}
					colors={{ scheme: "nivo" }}
					defs={[
						{
							id: "dots",
							type: "patternDots",
							background: "inherit",
							color: "#38bcb2",
							size: 4,
							padding: 1,
							stagger: true,
						},
						{
							id: "lines",
							type: "patternLines",
							background: "inherit",
							color: "#eed312",
							rotation: -45,
							lineWidth: 6,
							spacing: 10,
						},
					]}
					borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
					axisTop={null}
					axisRight={null}
					axisBottom={{
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: "calificación",
						legendPosition: "middle",
						legendOffset: 32,
					}}
					labelSkipWidth={12}
					labelSkipHeight={12}
					labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
					role="application"
				/>
			</div>
		</div>
	);
}

export default RecomendacionesCard;
