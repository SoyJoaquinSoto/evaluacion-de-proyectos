const ruta_server =
	process.env.ENV === "PROD" ? process.env.RUTA : "http://localhost:3000";

export default ruta_server;
