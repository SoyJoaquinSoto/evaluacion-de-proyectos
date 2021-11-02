const ruta_server =
	process.env.NODE_ENV === "production"
		? "https://evaluacion-de-proyectos.vercel.app"
		: "http://localhost:3000";

export default ruta_server;
