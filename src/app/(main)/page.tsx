import { TypingComponent } from "@/components/typing-component";

const MainPage = () => {
  return (
    <div className="min-h-full flex items-center justify-center flex-col max-w-[60vw] m-auto">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <TypingComponent texts={["Welcome to my portfolio!"]} typeSpeed={100} />
      </div>
    </div>
  );
};
export default MainPage;
