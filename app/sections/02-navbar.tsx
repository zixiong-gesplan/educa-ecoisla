import NavItem from "../components/NavItem";

export const NavBar = () => {
	return (
		
		<nav data-testid="navbar" className="flex columns-6 justify-items-center justify-center w-full bg-custom-light-bg text-white p-1 lg:py-2 text-[7pt] small:text-sm sm:text-lg lg:text-xl">

			<NavItem url="#inicio">Inicio</NavItem>
			<NavItem url="#objetivos">Objetivos generales</NavItem>
			<NavItem url="#ejes">Ejes de actuación</NavItem>
			<NavItem url="#plan">Plan de acción</NavItem>
			<NavItem url="#actividades">Actividades</NavItem>
			<NavItem url="#pie">Contacto</NavItem>
		
		</nav>
	);

}

