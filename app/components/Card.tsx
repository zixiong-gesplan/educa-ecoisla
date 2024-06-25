export const Card = ({title, description}:{title:string, description:string}) =>{
    return  <div className="p-8 bg-[#83AC50] text-[#ffffff] rounded-lg	sm:min-w-[200px] min-w-[300px] max-w-[650px]">
              <div className=" border-b-2 pb-4 mb-4">
                <h3 className="text-2xl">
                  {title}
                </h3>
              </div>
              <p className="text-xl">
                {description}
              </p>
            </div>
}