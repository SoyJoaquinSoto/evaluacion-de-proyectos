import Dashboard from "../../components/Dashboard";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import ruta_server from "../../helpers/ruta";

export default function Proyectos({ proyectos }) {
	const router = useRouter();

	const creacion = () => {
		let id;
		Swal.fire({
			title: "Ingrese el nombre del proyecto",
			input: "text",
			inputAttributes: {
				autocapitalize: "off",
			},
			showCancelButton: true,
			confirmButtonText: "Crear",
			cancelButtonText: "Cancelar",
			showLoaderOnConfirm: true,
			preConfirm: async (nombre) => {
				try {
					const result = await axios.post(`${ruta_server}/api/proyectos`, {
						nombre,
					});
					id = result.data.data._id;
					return result;
				} catch (error) {
					Swal.showValidationMessage(`Request failed: ${error}`);
				}
			},
			allowOutsideClick: () => !Swal.isLoading(),
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: `Su proyecto ha sido creado`,
					icon: "success",
					confirmButtonText: "Ir al proyecto",
				}).then((res) => {
					if (res.isConfirmed) {
						router.push(`/proyectos/${id}`);
					}
				});
			}
		});
	};

	return (
		<div className="flex items-top gap-4">
			<div className="mt-3 bg-transparent border-4 border-gray-400 rounded-full h-4 w-4 flex justify-center items-center"></div>

			<div className="w-full flex flex-col gap-6">
				<div className="flex flex-col gap-2 w-full">
					<h1 className="text-3xl">Proyectos</h1>
					<div className="flex justify-between w-full">
						<p className="text-gray-400">
							Selecciona un proyecto para ir a su dashboard
						</p>
						<button
							onClick={creacion}
							className="bg-blue-100/40 rounded-lg text-blue-500 px-6 py-2 hover:scale-95 transition font-medium"
						>
							+ Nuevo proyecto
						</button>
					</div>
				</div>

				<div>
					<Dashboard proyectos={proyectos} />
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const res = await axios.get(`${ruta_server}/api/proyectos/`);

	const proyectos = res.data;

	if (!proyectos) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			proyectos,
		},
	};
}
