import { useRouter } from "next/router";

const SideBar = () => {
	const router = useRouter();

	const secciones = [
		{
			nombre: "Vista general",
			ruta: "/",
		},
		{
			nombre: "Gestión de recursos del proyecto",
			ruta: "/gestion-de-recursos-del-proyecto",
		},
		{
			nombre: "Otro capítulo",
			ruta: "/otro-capitulo",
		},
	];

	return (
		<ul className="flex flex-none flex-col w-16 overflow-y-auto relative border-r-2 border-gray-300">
			{secciones &&
				secciones.map((seccion) => {
					const rutas = router.pathname.split("/");
					let esActivo = false;

					if (rutas.length === 3 && seccion.ruta === "/") {
						esActivo = true;
					}

					if (rutas.length === 4) {
						if (rutas[3] === seccion.ruta) {
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

export default SideBar;
