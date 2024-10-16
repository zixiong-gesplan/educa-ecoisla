
export const MasonrySkeleton = () => {
    const skeletonItems = Array(12).fill(0);

    return (
        <div className="flex justify-center w-full m-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 max-w-screen-xl">
                {skeletonItems.map((_, index) => (
                    <div key={index} className="animate-pulse">
                        <div className="bg-gray-500 rounded-lg w-20 md:w-32 lg:w-64 h-20 md:h-32 lg:h-64"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};