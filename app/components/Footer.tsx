import SocialButton from "./SocialButton";
import { SVGCodes } from "../types/SVG-codes";

interface contactProp {
	copy_right: String;
	telephone: String;
	email: String;
};


export const FooterBase = ({ copy_right, telephone, email }: contactProp) => {
	return (
		<footer className="flex justify-center w-full bg-custom-light-bg text-white p-8">

			<div className="w-full flex items-center flex-row flex-wrap gap-y-4 max-w-screen-xl">

				<div className="flex items-start flex-col gap-y-2 md:gap-y-4 w-full md:w-3/4">
					<p>Email: <a href={`mailto:${email}`}>{email}</a></p>
					<p data-testid="phone-number">Teléfono: {telephone}</p>
					<p>&copy;{copy_right}</p>
				</div>

				<div className="flex justify-center items-center md:items-end flex-row md:flex-col gap-y-2 md:gap-y-4 w-full md:w-1/4 mt-4 md:mt-0">
					<SocialButton d={SVGCodes.Facebook} url="#" className="text-white h-7 w-7 md:h-7 md:w-7 hover:bg-white hover:bg-opacity-15"/>
					<SocialButton d={SVGCodes.Instagram} url="#" className="text-white h-7 w-7 md:h-7 md:w-7 hover:bg-white hover:bg-opacity-15" />
					<SocialButton d={SVGCodes.Youtube} url="#" className="text-white h-7 w-7 md:h-7 md:w-7 hover:bg-white hover:bg-opacity-15" />
				</div>

			</div>

		</footer>
	);
};
