import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Autoplay from "embla-carousel-autoplay";

import companies from "../data/companies.json"
import faqs from "../data/faqs.json";

function LandingPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            {" "}
            and get{" "}
            <img
              src="https://website-assets-fd.freshworks.com/attachments/cjjjmhyex000ek4g0zazvklwo-logo-hired.one-half.png"
              alt="hirrd logo"
              className="h-14 sm:h-20 lg:h-30"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of jobs listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <img src="/public/banner.jpg" className="w-full" />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle>For job Seekers</CardTitle>
            <CardDescription>Search and Apply for jobs, track applications, and more</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent> */}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employees</CardTitle>
            <CardDescription>Post jobs, manage applications and find the best candidates </CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent> */}
        </Card>
      </section>
            
                   <Accordion type="single" collapsible>
                   {faqs.map((faq, index)=>{
                    return(
                      <AccordionItem value={`item-1${index+1}`} key={index}>
                     <AccordionTrigger>{faq.question}</AccordionTrigger>
                     <AccordionContent>
                       {faq.answer}
                     </AccordionContent>
                   </AccordionItem>
                    )
                   
                    })}
                 </Accordion>
           
    </main>
  );
}

export default LandingPage