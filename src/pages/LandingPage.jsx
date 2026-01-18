import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import companies from "@/data/companies.json";
import faqs from "@/data/faqs.json";

const LandingPage = () => {
  return (
    <section className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <div className="text-center flex flex-col gap-10 items-center">
        <h1 className="font-black text-7xl max-w-3xl">
          Find your dream job and get hired
        </h1>
        <p className="text-gray-300 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
        <div className="flex gap-4">
          <Button size="xl" className="text-2xl ">
            Find Jobs
          </Button>
          <Button variant="secondary" size="xl" className="text-2xl">
            Post a Job
          </Button>
        </div>
      </div>

      {/* carousel */}
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="flex items-center gap-5 sm:gap-20">
            {companies.map(({ name, path }) => (
              <CarouselItem key={name} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 md:h-14 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Banner */}
      <img src="/banner.jpeg" alt="Banner" className="w-full" />

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-2xl">Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-medium text-2xl">Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </div>

      {/* Accordion */}
      <div>
        <Accordion type="single" defaultValue="item-1" collapsible>
          {faqs.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default LandingPage;
