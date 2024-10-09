import Image from "next/image"

export const Hero = () => {
    return <section className="w-full flex py-auto items-center overflow-hidden">
    <Image 
      src="/landing_2.png" 
      alt="Landing" 
      unoptimized={true}
      // fill={true}
      width={0}
      height={0}
      className="w-full relative self-center min-w-[1420px] scale-down object-center"
    />
    <p className="z-10 absolute right-0 text-[#B0CB21] font-bold mr-4 text-4xl text-right align-middle backdrop-blur-sm bg-black/35 p-2 w-full sm:w-1/2 lg:text-5xl uppercase rounded-md">
      La <span className="text-[#DCE385]">educación ambiental</span> supone una pieza fundamental para la conservación del territorio.
    </p>
  </section>
}