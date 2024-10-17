export const FullScreenSpinner = () => {

    return (
        <div className="absolute min-h-[700px] w-full flex items-center justify-center bg-gray-100 z-50">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-32 sm:w-32 border-t-4 border-blue-500"></div>
        </div>
    );

};