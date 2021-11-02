import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const SideBar = () => {
	const router = useRouter();
	const { id, capitulo } = router.query;

	const [proyecto, setProyecto] = useState();
	const [secciones, setSecciones] = useState([
		{ nombre: "Vista general", id: "" },
	]);

	useEffect(async () => {
		const res = await axios.get(`http://localhost:3000/api/proyectos/${id}`);
		setProyecto(res.data.data.proyecto);
	}, []);

	useEffect(() => {
		if (proyecto?.capitulos) {
			setSecciones(
				...secciones,
				...proyecto.capitulos.map((cap) => ({
					nombre: cap.nombre,
					id: cap._id.toString(),
				}))
			);
		}
	}, [proyecto]);

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

	return (
		<ul className="flex flex-none flex-col w-16 overflow-y-auto relative border-r-2 border-gray-300">
			<li className="h-16 flex justify-center items-center hover:bg-gray-200 cursor-pointer">
				<button>
					<Link href="/proyectos">
						<img src="/logo.svg" alt="" />
					</Link>
				</button>
			</li>
			{secciones &&
				secciones.map((seccion) => {
					let esActivo = false;

					if (seccion?.ruta === "/" && !id && !capitulo) {
						esActivo = true;
					}

					if (capitulo === seccion?.ruta) {
						esActivo = true;
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
