import Image from "next/image"
import { SVGTicket } from "../components/SVGTicket"
import { ToolsArticle } from "../components/ToolsArticle"

export const Tools = () => {
	return <section className="px-6 flex flex-col items-center max-w-screen-xl gap-0 xl:gap-6">

		<h2 className="text-2xl w-full text-center text-gray-900 font-extrabold">INSTRUMENTOS PARA ESTAS LABORES</h2>

		<ToolsArticle
			align="left"
			header="Educación ambiental"
			content="Promover actividades educativas destinadas a la ciudadanína de Gran Canaria mediante el ámbito formal y no formal
					(centros escolares, colectivos, administraciones locales, etc.),
					a través de acciones como salidas de campo, campañas de sensibilización , jornadas de voluntariado, etc."
			items={["Salidas al campo", "Campañas de sensibilización", "Voluntariado"]}
		></ToolsArticle>

		<ToolsArticle
			align="right"
			header="Divulgación ambiental"
			content="Mediante el que se elaboran materiales divulgativos, promoviendo la difusión
					de contenidos para el fomento de la concienciación social en determinados ámbitos."
			items={["Materiales divulgativos", "Difusión de contenido", "Concienciación social"]}
		></ToolsArticle>
		
	</section>
}