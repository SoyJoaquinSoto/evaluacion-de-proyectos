import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = ({ proyecto }) => {
	const router = useRouter();

	// const secciones = [
	// 	{
	// 		nombre: "Vista general",
	// 		ruta: "/",
	// 	},
	// 	{
	// 		nombre: "Gestión de recursos del proyecto",
	// 		ruta: "/gestion-de-recursos-del-proyecto",
	// 	},
	// 	{
	// 		nombre: "Otro capítulo",
	// 		ruta: "/otro-capitulo",
	// 	},
	// ];

	const secciones = proyecto.capitulos.map()

	return (
		<ul className="flex flex-none flex-col w-16 overflow-y-auto relative border-r-2 border-gray-300">
			<li className="h-16 flex justify-center items-center hover:bg-gray-200 cursor-pointer">
				<button>
					<Link href="/proyectos">
						<img src="/logo.svg" alt="" />
					</Link>
				</button>
			</li>
			{proyecto &&
				proyecto.capitulos.map((capitulo) => {
					const rutas = router.pathname.split("/");
					let esActivo = false;

					if (rutas.length === 3 && seccion.ruta === "/") {
						esActivo = true;
					}

					if (rutas.length === 4) {
						if (rutas[3] === capitulo._id.toString()) {
							esActivo = true;
						}
					}

					return (
						<li
							key={seccion.nombre}
							className="h-16 flex justify-center items-center text-3xl font-thin hover:bg-blue-100 cursor-pointer"
							style={{
								backgroundColor: esActivo ? "rgb(59, 130, 246, 1)" : "",
								color: esActivo ? "white" : "",
							}}
						>
							{seccion.nombre[0]}
						</li>
					);
				})}
		</ul>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.query;

	const res = await axios.get(`http://localhost:3000/api/proyectos/${id}`);

	const respuesta = res.data.data;
	console.log(respuesta);

	if (!respuesta) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...respuesta,
		},
	};
}

export default SideBar;
