import Dashboard from "../components/Dashboard";
import div from "../layout/Layout";

export default function Home() {
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
						<button className="bg-blue-100/40 rounded-lg text-blue-500 px-6 py-2 hover:scale-95 transition font-medium">
							+ Nuevo proyecto
						</button>
					</div>
				</div>

				<div>
					<Dashboard />
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	return {
		redirect: {
			destination: "/proyectos",
			permanent: false,
		},
	};
}
