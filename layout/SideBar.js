import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import ruta_server from "../helpers/ruta";
import ReactTooltip from "react-tooltip";

const SideBar = () => {
	const router = useRouter();
	const { id, capitulo } = router.query;

	const [proyecto, setProyecto] = useState();
	const [secciones, setSecciones] = useState([,]);

	useEffect(async () => {
		const res = await axios.get(`${ruta_server}/api/proyectos/${id}`);
		setProyecto(res.data.data.proyecto);
	}, []);

	useEffect(() => {
		if (proyecto?.capitulos) {
			setSecciones([
				{ nombre: "Vista general", id: "" },
				...proyecto.capitulos.map((cap) => ({
					nombre: cap.nombre,
					id: cap._id.toString(),
				})),
			]);
		}
	}, [proyecto]);

	return (
		<ul className="flex flex-none flex-col w-16 overflow-y-auto relative border-r-2 border-gray-300">
			<li className="h-16 flex justify-center items-center hover:bg-gray-200 cursor-pointer">
				<button
					className="h-full w-full flex justify-center items-center"
					data-tip="Inicio"
				>
					<Link href="/proyectos">
						<img src="/logo.svg" alt="" />
					</Link>
				</button>
				<ReactTooltip place="right" type="dark" effect="solid" />
			</li>
			{secciones &&
				secciones.map((seccion) => {
					let esActivo = false;

					if (seccion?.id === "" && !capitulo) {
						esActivo = true;
					}

					if (capitulo === seccion?.id) {
						esActivo = true;
					}

					return (
						<li
							key={seccion.nombre}
							className="h-16 w-full flex justify-center items-center text-3xl font-thin hover:bg-blue-100 cursor-pointer"
							style={{
								backgroundColor: esActivo ? "rgb(59, 130, 246, 1)" : "",
								color: esActivo ? "white" : "",
							}}
						>
							<button className="h-full w-full" data-tip={seccion.nombre}>
								<Link href={`/proyectos/${id}/${seccion.id}`}>
									{seccion.nombre[0]}
								</Link>
							</button>
							<ReactTooltip place="right" type="dark" effect="solid" />
						</li>
					);
				})}
		</ul>
	);
};

export default SideBar;
