import Dashboard from "../../components/Dashboard";

export default function Home() {
	return (
		<div className="flex items-top gap-4">
			<div className="mt-4 bg-gray-400 rounded-full h-5 w-5 flex justify-center items-center">
				<div className="bg-white rounded-full h-3 w-3"></div>
			</div>

			<div className="w-full flex flex-col gap-6">
				<div className="flex flex-col gap-2 w-full">
					<h1 className="text-4xl">Proyectos</h1>
					<div className="flex justify-between w-full">
						<p className="text-gray-400">
							Selecciona un proyecto para ir a su dashboard
						</p>
						<button className="bg-blue-100/40 rounded-lg text-blue-500 px-6 py-2 hover:scale-95 transition font-medium">
							Nuevo proyecto
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
