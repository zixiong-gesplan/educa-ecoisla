
export const MasonrySkeleton = () => {
    const skeletonItems = Array(12).fill(0);

    return (
        <div className="flex justify-center w-full m-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 max-w-screen-xl">
                {skeletonItems.map((_, index) => (
                    <div key={index} className="animate-pulse">
                        <div className="bg-gray-500 rounded-lg w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};