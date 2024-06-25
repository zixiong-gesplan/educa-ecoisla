export const Target = ({children,text}:{
    children: React.ReactNode;
    text: string;
  }) =>{
    return <div className="flex flex-col items-center mt-8">
          {children}
          <p className="text-center text-zinc-50 border-b-2 pb-4 text-2xl grow	md:max-w-80 sm:w-full">
            {text}
          </p>
    </div>
}