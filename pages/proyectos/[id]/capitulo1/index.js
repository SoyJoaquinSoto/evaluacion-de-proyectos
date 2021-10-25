import axios from "axios";

const Proyecto = ({ proyecto }) => {
	return (
		<div className="flex items-top gap-4">
			<div
				className="mt-3 bg-transparent border-4 rounded-full h-4 w-4 flex justify-center items-center"
				style={{ borderColor: `rgba(${proyecto.color})` }}
			></div>

			<div className="w-full flex flex-col gap-6">
				<h1 className="text-3xl">Gestión de recursos del proyecto</h1>

				<div className="flex flex-col gap-4">
					<h2 className="text-2xl">Equipo humano</h2>
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
