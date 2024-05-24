import TypingComponent from "@/components/typing-component";

const MainPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <TypingComponent
          texts={[
            "Welcome to my portfolio!",
            "I'm Emre, a Frontend and Mobile Developer.",
          ]}
          typeSpeed={100}
        />
      </div>
    </div>
  );
};
export default MainPage;
