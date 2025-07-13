import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <>
            <div className="container px-4 py-10 sm:px-6 md:px-10 lg:px-14">
               <div className="flex justify-between items-center flex-wrap gap-2 mb-6">
                    <Skeleton className="h-[20px] w-[300px] rounded-full" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Skeleton className="h-24 w-full rounded-full" />
                    <Skeleton className="h-24 w-full rounded-full" />
               </div>
          </div>
        </>
    );
}