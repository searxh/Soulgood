import React from "react";

interface PagesIndicatorPropsType {
    currentPage: number;
    totalPages: number;
}

export const PagesIndicator = ({
    currentPage,
    totalPages,
}: PagesIndicatorPropsType) => {
    const [pagesDot, setPagesDot] = React.useState<Array<number>>([
        ...Array(totalPages),
    ]);
    React.useEffect(() => {
        setPagesDot([...Array(totalPages)]);
    }, [totalPages]);
    return (
        <div className="grid grid-flow-col gap-1 w-fit my-auto mx-10">
            {pagesDot.map((value, index) => {
                return (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition duration-300 ${
                            currentPage === index
                                ? "bg-pink-500"
                                : "bg-neutral-400"
                        } shadow-md`}
                    />
                );
            })}
        </div>
    );
};
