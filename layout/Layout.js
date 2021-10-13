import Head from "next/head";
import Header from "./Header";

function Layout({ children }) {
	return (
		<div className="flex flex-col w-full">
			<Head>
				<title>Evaluación de proyectos</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header />

			<div>{children}</div>
		</div>
	);
}

export default Layout;
