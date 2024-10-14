import NavItem from "../components/NavItem";

export const NavBar = () => {
	return (
		
		<nav className="flex columns-6 justify-items-center justify-center w-full bg-custom-light-bg text-white p-1 lg:py-2 text-[7pt] sm:text-sm lg:text-xl">

			<NavItem url="#" label="Inicio"></NavItem>
			<NavItem url="#" label="Objetivos generales"></NavItem>
			<NavItem url="#" label="Ejes de actuación"></NavItem>
			<NavItem url="#" label="Plan de acción"></NavItem>
			<NavItem url="#" label="Actividades"></NavItem>
			<NavItem url="#" label="Contacto"></NavItem>
		
		</nav>
	);

}

