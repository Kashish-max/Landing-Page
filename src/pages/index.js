import Head from "next/head"
import { useState } from "react";
import Header from "@/components/Header"
import { Switch } from "@material-tailwind/react";
import Template from "@/components/Template";
import Footer from "@/components/Footer";

import { templates } from "@/components/data/templates";

export default function Home() {

  const [switchOn, setSwitchOn] = useState(false);
  const handleSwitchChange = (e) => {
    setSwitchOn(e.target.checked);
  };


  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <section className="bg-white md:bg-gradient-to-r md:from-[#f0fcff] md:via-[#faf9fa] md:to-[#f7f0f1] pt-16">
        <div className="w-full max-w-7xl mx-auto py-12">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-2/3 flex flex-col justify-between items-center xl:items-start">
              <div className="px-4 sm:ps-12">
                <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/42234823-multor-logo.svg" className="w-20" />
                <h1 className="text-xl sm:text-3xl font-bold md:max-w-[80%] mt-4">
                  Schedule more virtual appointments, online classes, and video consultations with this high-converting lead capture template.
                </h1>
                <div className="mt-2 hidden md:block">
                  <Switch
                    label={
                      <div>
                        <p className="text-gray-900 font-semibold">Switch to full view</p>
                      </div>
                    }
                    onChange={handleSwitchChange} 
                  />                
                </div> 
                <a 
                  href="/landing"
                  target={"_blank"}
                  className="uppercase text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium text-md px-6 py-2.5 text-center inline-flex items-center mr-2 mt-8 mb-2 shadow-lg"
                >
                  Make it yours
                </a>
               
                {/* <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Dark</button> */}
              </div>
              {
                !switchOn && (
                  <div className="mt-12 hidden md:block">
                    <div className="p-3 w-[690px] h-[420px] overflow-hidden bg-contain bg-no-repeat" style={{"background-image": "url('/assets/laptop.png')"}}>
                      <iframe className="w-full px-[4.1rem] pb-12 pt-2 h-full" src="/landing"></iframe>
                    </div>
                  </div>  
                )
              }
            </div>
            {
              !switchOn && (
                <div className="relative hidden xl:flex flex-col justify-end w-1/3">
                  <div className="overflow-hidden w-[350px] h-[700px] bg-contain bg-no-repeat" style={{"background-image": "url('/assets/phone.png')"}}>
                    <iframe className="w-full pb-[4.2rem] pt-[3.7rem] ps-1.5 pe-4 h-full" src="/landing"></iframe>
                  </div>
                </div>  
              )
            }
          </div>
        </div>
        {
          switchOn && (
            <div className="w-full h-screen max-w-7xl mx-auto pb-12 px-5 -translate-y-4">
              <iframe className="w-full h-full border-2 border-gray-300" src="/landing"></iframe>
            </div>
          )
        }
        <div className="block md:hidden w-full h-screen max-w-7xl mx-auto pb-12 px-5">
          <iframe className="w-full h-full border-2 border-gray-300" src="/landing"></iframe>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="max-w-7xl mx-auto py-16">
          <h1 className="text-lg sm:text-2xl font-semibold text-center mb-12 px-1 [word-spacing:5px]">VIEW SIMILAR TEMPLATES TO MULTOR</h1>
          <div className="flex flex-wrap items-center justify-between pb-5 space-y-6">
            {templates.map((template, index) => {
              return (
                <div className="w-full lg:w-1/2 xl:w-1/3 flex justify-center">
                  <Template key={index} {...template} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


