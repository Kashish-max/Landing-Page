import Head from "next/head"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectAuthState, setAuthState } from "../store/authSlice";
import { wrapper } from "@/store/store";
import Header from "@/components/Header"
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

export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <div className="w-full h-screen">
        <iframe className="w-full h-full" src="/landing"></iframe>
      </div>
    </main>
  )
}


