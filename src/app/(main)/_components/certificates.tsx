import CertificateCard from "@/components/certificate-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { certificates } from "@/constants/certificates";

export const Certificates = () => {
  return (
    <section className="m-4 w-full">
      Latest Cerficates
      <div className="flex flex-row gap-4 w-full justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[90%]"
        >
          <CarouselContent className="p-4">
            {certificates.map((certificate) => (
              <CarouselItem
                key={certificate.title}
                className="flex md:basis-1/2 lg:basis-1/3"
              >
                <CertificateCard {...certificate} />
              </CarouselItem>
            ))}
            <CarouselItem
              key={"show all"}
              className="md:basis-1/2 lg:basis-1/4 flex rounded-full items-center justify-center"
            >
              <Button variant="link">Show All Certificates(+24)</Button>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="h-10 w-10" />
          <CarouselNext className="h-10 w-10" />
        </Carousel>
      </div>
    </section>
  );
};
