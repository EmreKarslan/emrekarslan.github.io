export const TechStackButtonSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-2 rounded-lg border border-transparent shadow animate-pulse bg-gray-200">
        <div className=" w-[48px] h-[48px]"></div>
      </div>
      <div className="rounded-xl border border-transparent shadow animate-pulse bg-gray-200 w-12 h-4" />
    </div>
  );
};
