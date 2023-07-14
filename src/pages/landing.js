import Head from "next/head"

import { useState } from "react";

import Book from "@/components/Book";
import Testimonial from "@/components/Testimonial";
import CarouselComponent from "@/components/Carousel";
import CardComponent from "@/components/Card";
import DefaultSpeedDial from "@/components/Speed-Dial";

import { testimonials } from "@/components/data/testimonials";
import { benefits } from "@/components/data/benefits";
import { features } from "@/components/data/features";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export default function LandingPage() {
    const [openBookingForm, setOpenBookingForm] = useState(false);

    const testimonialsSection = () => {
      return testimonials.map((testimonial, index) => (
        <div key={index}>
          <Testimonial {...testimonial} />
        </div>
      ));
    }

    return (
        <div>
          <Head>
            <title>Landing Page</title>
          </Head>
          <DefaultSpeedDial />
  
          {/* Hero */}
          <Book open={openBookingForm} setOpen={setOpenBookingForm} />
          <section className="bg-gradient-to-r from-[#f0fcff] via-[#faf9fa] to-[#f7f0f1] md:pt-20 md:pb-10 px-4 sm:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-between py-6">
  
                {/* Left Half */}
                <div className="xs-w-full lg:w-2/3 xl:w-1/2">
                  <div className="flex items-center">
                      <hr className="w-12 h-0.5 my-8 bg-gray-500 border-0 rounded-lg" />
                      <span className="px-3 font-semibold text-gray-600">
                        <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg" className="w-20" />
                      </span>
                  </div>
                  <div className="max-w-full lg:max-w-[70%] mt-2">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight [word-spacing:5px]">Describe the value of booking an appointment</p>
                  </div>
                  <div className="max-w-full md:max-w-[70%] mt-2">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-normal mt-4 sm:mt-10">No need to get clever. Tell people exactly what you&apos;re offering, then use this space to communicate your key value proposition.</p>
                  </div>
                  <div className="py-10">
                    <button 
                      type="button" 
                      onClick={() => setOpenBookingForm(true)} 
                      className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-md px-6 py-2.5 text-center inline-flex items-center mr-2 mb-2 shadow-lg"
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
  
                {/* Right Half */}
                <div className="px-5 py-2 xs-w-full lg:w-1/3 xl:w-1/2 items-center hidden sm:flex">
                  <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex flex-col flex-wrap w-1/2">
                      <div className="p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block shadow-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                      </div>
                      <div className="p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block shadow-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1534239697798-120952b76f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-wrap w-1/2">
                    <div className="p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block shadow-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1551128997-c2b66772f982?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                      </div>                    
                      <div className="p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block shadow-lg object-cover object-center"
                          src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          {/* Benefits */}
          <section className="bg-white px-5 md:px-10">
            <div className="max-w-7xl mx-auto py-12">
              <h1 className="text-2xl sm:text-3xl text-gray-900 font-bold text-center mb-10">Benefits of Signing Up</h1>
              <div className="flex flex-wrap items-center justify-between pb-5">
                {benefits.map((benefit, index) => {
                  return (
                    <div className="flex justify-center xs-w-full md:w-1/2 lg:w-1/3">
                      <div key={index} className="flex max-w-sm sm:p-6 bg-white">
                        <div>
                          <img src={benefit.logo} className="w-20" />
                        </div>
                        <div className="ms-5">
                          <h5 className="mb-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">{benefit.title}</h5>
                          <p className="mb-3 text-gray-800">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}          
              </div>
            </div>
          </section>
  
          {/* what visitors are signing up for */}
          <section className="bg-[#f0fcff] px-10 md:px-10">
            <div className="max-w-7xl mx-auto py-20 flex flex-col items-center justify-center">
              <h1 className="text-2xl sm:text-5xl text-gray-900 font-bold text-center mb-10">Show visitors what they&apos;re signing up for</h1>
              <p className="text-xl sm:text-2xl lg:max-w-[70%] md:max-w-[100%] text-gray-800 text-center">
                Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).
              </p>
            </div>
          </section>
  
          {/* Testimonials */}
          <section className="bg-white px-5 md:px-10">
            <div className="max-w-7xl mx-auto py-12">
              <CarouselComponent carouselItems={ testimonialsSection } />
            </div>
          </section>
  
          {/* Features */}
          <section className="bg-white px-5 md:px-10">
            <div className="max-w-7xl mx-auto py-12 pb-24">
              <div className="sm:space-y-16 flex flex-col items-center justify-center max-w-full">
                {features.map((feature, index) => {
                  return (
                    <CardComponent key={index} isReverse={index % 2 == 0 ? true : false} {...feature} />
                  )
                })}
              </div>
            </div>
          </section>
  
          {/* About */}
          <section className="bg-[#f8fafc] px-5 md:px-10">
            <div className="max-w-7xl mx-auto py-12 pb-24">
              <div className="flex">
                {/* Left Half */}
                <div className="px-24 xs-w-full lg:w-1/3 xl:w-1/2 items-center hidden sm:flex">
                  <img className="shadow-lg" src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/df213ca0-multor-about_100000000000000000001o.jpg" />
                </div>
  
                {/* Right Half */}
                <div className="xs-w-full lg:w-2/3 xl:w-1/2 flex flex-col justify-center">
                  <Timeline>
                    <TimelineItem>
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                        <TimelineIcon />
                        <Typography variant="h6" color="blue-gray" className="leading-none">
                          <span className="font-semibold text-gray-800">
                            About
                          </span>
                        </Typography>
                      </TimelineHeader>
                      <TimelineBody className="pb-8">
                        <Typography
                          variant="small"
                          color="gary"
                          className="font-normal text-gray-600"
                        >
                            <div className="max-w-full lg:max-w-[70%] mt-2">
                              <p className="text-4xl font-bold text-gray-900 leading-tight [word-spacing:5px]">Describe the value of booking an appointment</p>
                            </div>
                            <div className="max-w-full md:max-w-[70%] mt-2">              
                              <p className="text-xl text-gray-800 leading-normal mt-4">
                                No need to get clever. Tell people exactly what you&apos;re offering, then use this space to communicate your key value proposition.
                              </p>
                            </div>
                        </Typography>
                      </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineConnector />
                      <TimelineHeader className="h-3">
                        <TimelineIcon />
                      </TimelineHeader>
                    </TimelineItem>
                  </Timeline>
                  
                  <div className="pt-6">
                    <button 
                      type="button" 
                      className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-md px-6 py-2.5 text-center inline-flex items-center mr-2 mb-2 shadow-lg"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <footer className="bg-[#050708] px-5 md:px-10">
            <div className="flex justify-between max-w-7xl mx-auto text-white py-4">
              <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg" className="w-30" />
              <div className="text-base">© 2020 Insert Name Here. All rights reserved.</div>
            </div>
          </footer>
  
        </div>        
    )
}