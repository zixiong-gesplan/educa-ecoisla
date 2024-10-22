import { ImageWrapper as Image } from "../components/Image";
import SocialButton from "../components/SocialButton";
import { SVG } from "../enums/SVG";

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between p-1 sm:p-3 md:p-4 w-full">
        <div className="w-1/3">
          <a href="https://cabildo.grancanaria.com">
            <Image
              src="Cabildo_Logo.png"
              alt="Cabildo de Gran Canaria"
              className="w-10 md:w-20 inline"
            />
          </a>
          <Image
            src="Ecoisla_Logo.png"
            alt="Educa Ecoisla"
            className="w-10 md:w-20 ml-2 inline"
          />
        </div>
        <div className="text-center text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-1/3 text-dark-green">
          EDU<span className="text-light-cyan">C</span>A 
          E<span className="text-light-cyan">C</span>OISLA
        </div>
        <div className="w-1/3 flex justify-end">
          <SocialButton url="#" d={SVG.FACEBOOK}></SocialButton>
          <SocialButton url="#" d={SVG.INSTAGRAM}></SocialButton>
          <SocialButton url="#" d={SVG.YOUTUBE}></SocialButton>
        </div>
      </div>
    </header>
  );
};
