import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCards = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, indx) => (
        <div key={indx} className="flex items-start flex-col">
          <Skeleton className=" h-64 w-full" />
          <Skeleton className="w-full h-4 mt-5" />
          <Skeleton className="w-1/2 h-4 mt-5" />
          <div className="flex items-center justify-between w-full">
            <Skeleton className="w-1/3 h-4" />
            <Skeleton className=" h-10 w-10 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCards;
