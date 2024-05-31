import { TypingComponent } from "@/components/typing-component";
import { AboutMe } from "./_components/about-me";
import { TechStack } from "./_components/tech-stack";
import { Certificates } from "./_components/certificates";
import { LatestProjects } from "./_components/latest-projects";

const MainPage = () => {
  return (
    <div className="min-h-full w-full flex items-center justify-center flex-col m-auto">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 w-full">
        <TypingComponent texts={["Welcome to my portfolio!"]} typeSpeed={100} />
        <AboutMe />
        <TechStack />
        <LatestProjects />
        <Certificates />
        <section>Latest Projects</section>
      </div>
    </div>
  );
};
export default MainPage;
