import { TypingComponent } from "@/components/typing-component";
import { AboutMe } from "./_components/about-me";
import CertificateCard from "@/components/certificate-card";
import { Button } from "@/components/ui/button";
import { TechStack } from "./_components/tech-stack";

const MainPage = () => {
  return (
    <div className="min-h-full w-full flex items-center justify-center flex-col m-auto">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 w-full">
        <TypingComponent texts={["Welcome to my portfolio!"]} typeSpeed={100} />
        <AboutMe />
        <TechStack />
        <section className="m-4">
          Latest Cerficates
          <div className="flex flex-row gap-4">
            <CertificateCard
              issuedBy="a"
              issueDate="e"
              title="test"
              description="emre"
              imageUrl="/certificates/previews/problem-solving-(basic)-preview.jpg"
              pdfLink="/certificates/pdfs/problem-solving-(basic).pdf"
            />
            <CertificateCard
              issuedBy="a"
              issueDate="e"
              title="test"
              description="emre"
              imageUrl="/certificates/previews/problem-solving-(basic)-preview.jpg"
              pdfLink="/certificates/pdfs/problem-solving-(basic).pdf"
            />
            <CertificateCard
              issuedBy="a"
              issueDate="e"
              title="test"
              description="emre"
              imageUrl="/certificates/previews/problem-solving-(basic)-preview.jpg"
              pdfLink="/certificates/pdfs/problem-solving-(basic).pdf"
            />
            <div className="flex rounded-full items-center justify-center">
              <Button variant="link">Show All Certificates(+24)</Button>
            </div>
          </div>
        </section>
        <section>Latest Projects</section>
      </div>
    </div>
  );
};
export default MainPage;
