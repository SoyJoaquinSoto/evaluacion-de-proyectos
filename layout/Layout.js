import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Body from "./Body";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
	const router = useRouter();

	return (
		<div>
			{/* <Header /> */}

			<div className="flex gap-12 w-full h-screen">
				{router.pathname == "/proyectos" ? (
					<div className="w-16"> </div>
				) : (
					<SideBar />
				)}
				<Body>{children}</Body>
			</div>
		</div>
	);
}

export default Layout;
