import { ImageWrapper as Image } from "../components/Image"
import SocialButton from '../components/SocialButton';
import { SVGCodes } from "../types/SVG-codes";

export const Header = () => {

  return (

    <header data-testid="header" className="bg-white">

      <div className="flex items-center justify-between p-1 sm:p-3 md:p-4 w-full">

        <div className="w-1/4">
          <a href="https://cabildo.grancanaria.com" >
            <Image src="Cabildo_Logo.png" alt="Cabildo de Gran Canaria" className="w-8 tiny:w-10 md:w-20 inline" />
          </a>
          <Image src="Ecoisla_Logo.png" alt="Educa Ecoisla" className="w-8 tiny:w-10 md:w-20 ml-2 inline" />
        </div>

        <div className="text-center text-base tiny:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-2/4 text-custom-dark-green">
          EDU<span className="text-custom-light-green">C</span>A E<span className="text-custom-light-green">C</span>OISLA
        </div>

        <div className="w-1/4 flex justify-end">

          <SocialButton url="#" d={SVGCodes.Facebook}></SocialButton>
          <SocialButton url="#" d={SVGCodes.Instagram}></SocialButton>
          <SocialButton url="#" d={SVGCodes.Youtube}></SocialButton>

        </div>

      </div>

    </header>

  );

}