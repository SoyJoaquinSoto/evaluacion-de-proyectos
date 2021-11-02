import axios from "axios";
import Telaraña from "../../../components/Telaraña";
import {
	cal_capitulo,
	cal_max,
	cal_proyecto,
} from "../../../helpers/calificaciones";
import CapituloCard from "../../../components/CapituloCard";
import RecomendacionesCard from "../../../components/RecomendacionesCard";
import ruta_server from "../../../helpers/ruta";

const Proyecto = ({ proyecto, capitulos }) => {
	return (
		<div className="flex items-top gap-4">
			<div
				className="mt-3 bg-transparent border-4 rounded-full h-4 w-4 flex justify-center items-center"
				style={{ borderColor: `rgba(${proyecto.color})` }}
			></div>

			<div className="w-full flex flex-col gap-6">
				<div className="flex flex-col gap-2 w-full">
					<h1 className="text-3xl">{proyecto.nombre}</h1>
					<div className="flex justify-between w-full">
						<p className="text-gray-400">
							calificación: {`${cal_proyecto(proyecto)}/${cal_max(capitulos)}`}
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-2/5 h-96">
							<Telaraña
								data={proyecto.capitulos.map((capitulo) => ({
									nombre: capitulo.nombre,
									calificacion: cal_capitulo(capitulo),
								}))}
							/>
						</div>
						<div className="flex flex-col gap-2 w-3/5">
							<h2 className="text-2xl">Capítulos</h2>
							<div className="grid grid-cols-2 grid-flow-row gap-3 w-full">
								{proyecto.capitulos.map((capitulo, index) => {
									return (
										<CapituloCard
											key={capitulo.nombre}
											capitulo_real={capitulo}
											capitulo_teorico={capitulos[index]}
										/>
									);
								})}
							</div>
						</div>
					</div>

					<div className="w-full flex flex-col gap-4">
						<h2 className="text-2xl">Recomendaciones</h2>
						{proyecto.capitulos.map((capitulo, index) => {
							return (
								<RecomendacionesCard
									key={capitulo.nombre}
									capitulo_real={capitulo}
									capitulo_teorico={capitulos[index]}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.query;

	const res = await axios.get(`${ruta_server}/api/proyectos/${id}`);

	const res2 = await axios.get(`${ruta_server}/api/capitulos`);

	const proyecto = res.data.data.proyecto;
	const capitulos = res2.data.data;

	if (!proyecto) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			proyecto,
			capitulos,
		},
	};
}

export default Proyecto;
