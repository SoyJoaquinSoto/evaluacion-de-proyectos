import axios from "axios";
import { ResponsiveRadar } from "@nivo/radar";
import Telaraña from "../../../components/Telaraña";

const Proyecto = ({ proyecto }) => {
	return (
		<div className="flex items-top gap-4">
			<div
				className="mt-3 bg-transparent border-4 rounded-full h-4 w-4 flex justify-center items-center"
				style={{ borderColor: `rgba(${proyecto.color})` }}
			></div>

			<div className="w-full flex flex-col gap-6">
				<h1 className="text-3xl">{proyecto.nombre}</h1>

				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<div className="w-1/2 h-96">
							<Telaraña
								data={[
									{
										taste: "fruity",
										chardonay: 52,
										carmenere: 117,
										syrah: 115,
									},
									{
										taste: "bitter",
										chardonay: 56,
										carmenere: 77,
										syrah: 48,
									},
									{
										taste: "heavy",
										chardonay: 78,
										carmenere: 117,
										syrah: 106,
									},
									{
										taste: "strong",
										chardonay: 43,
										carmenere: 52,
										syrah: 75,
									},
									{
										taste: "sunny",
										chardonay: 48,
										carmenere: 26,
										syrah: 111,
									},
								]}
							/>
						</div>
						<div>
							<h2 className="text-2xl">Capítulos</h2>
						</div>
					</div>

					<div>
						<h2 className="text-2xl">Recomendaciones</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.query;

	const res = await axios.get(`http://localhost:3000/api/proyectos/${id}`);

	const proyecto = res.data;

	if (!proyecto) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			proyecto,
		},
	};
}

export default Proyecto;
