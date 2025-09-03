export const Card = ({ title, description }: { title: string, description: string }) => {
  return <div className="p-2 sm:p-8 bg-white md:bg-custom-light-bg text-custom-light-bg md:text-white rounded-md sm:rounded-lg
						sm:min-w-[200px] min-w-[300px]
                         border-custom-light-bg border-2 md:border-none hidden md:block">
    <div className="md:border-b-2 md:pb-4 mb-0 md:mb-4">
      <h3 className="text-lg sm:text-2xl text-center">
        {title}
      </h3>
    </div>
    <p className="text-xl text-center" dangerouslySetInnerHTML={{ __html: description }}>
    </p>
  </div>
}