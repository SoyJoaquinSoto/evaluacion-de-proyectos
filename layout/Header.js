import Link from "next/link";

function Header() {
	return (
		<div className="h-16 w-full border-b-2 border-b-gray-300 flex items-center">
			<button className="border-r-2 flex-none border-gray-300 h-full w-16 flex justify-center items-center hover:bg-gray-200 cursor-pointer ">
				<Link href="/proyectos">
					<img src="/logo.svg" alt="gray eye" />
				</Link>
			</button>
			<div className="w-full h-full flex justify-between px-4 gap-4 flex">
				<input
					className="h-full w-full pl-8 bg-buscar bg-left bg-no-repeat text-sm"
					type="text"
					placeholder="Escribe algo para buscar..."
				/>

				<div className="hover:bg-gray-200 cursor-pointer gap-1 h-16 w-16 flex justify-center flex-none items-center">
					<img
						className="h-8 rounded-full"
						src="/profile-img.jpg"
						alt="Imagen de perfil del usuario"
					/>
					<img
						className="w-3"
						src="/abrir.svg"
						alt="Flecha apuntando hacia abajo"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
