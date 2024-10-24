export const FullScreenSpinner = () => {

    return (
        <div data-testid="fullscreen-spinner" className="absolute min-h-[700px] w-full flex items-center justify-center bg-gray-100 z-50">
            <div className="animate-spin rounded-full h-12 w-12 sm:h-20 sm:w-20 md:h-32 md:w-32 border-t-4 border-blue-500"></div>
        </div>
    );

};