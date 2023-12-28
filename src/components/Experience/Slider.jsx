import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { MdDesignServices } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import { FiCodesandbox } from "react-icons/fi";
import { FaLaptopHouse } from "react-icons/fa";
import Card from "./Card";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full rounded-xl shadow-base-shadow mt-10"
        autoHeight={true}
        loop={true}
        grabCursor={true}
        style={{
          "--swiper-pagination-color": "#d400ff",
          "--swiper-theme-color": "#d400ff",
        }}
      >
        <SwiperSlide>
          <Card
            Icon={FaLaptopHouse}
            title={"Developer"}
            desc={[
              `Build and develop the foundation for a registration system`,
            ]}
            company="Seneca Housing Hackathon Committee"
            startTime="December 2023"
            endTime="Current"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            Icon={MdDesignServices}
            title={"IPC144 Lab Assistant"}
            desc={[
              `Collaborated with professors to create a positive and productive learning environment`,
              `Assisted, guided, troubleshot student code in C/C++ programming lab sessions.`,
            ]}
            company="Seneca College"
            startTime="January 2023"
            endTime="Current"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            Icon={FiCodesandbox}
            title={"Co-op, Software Engineer"}
            desc={[
              `Participated in bi-weekly sprints and daily-standups.`,
              `Created, updated features, fixed front-end and back-end errors related to user experience.`,
              `Improved test coverage for the software.`,
              `Increased load handling by 30%`,
            ]}
            company="PAR Canada ULC"
            startTime="September 2023"
            endTime="December 2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            Icon={HiDesktopComputer}
            title={"Web developer"}
            desc={[
              `Enhanced an existing module in the current CMS by providing additional functionalities, resulting in increased efficiency.`,
              `Successfully deployed and maintained two front-end projects, resulting in improved user engagement and website performance.`,
              `Developed and maintained internal and external websites with AODA compliance.`,
              `Collaborated with communication officers and the web team to enhance the web application's appearance and functionality to improve user experience.`,
            ]}
            company="TDSB (Toronto District School Board)"
            startTime="August 2022"
            endTime="December 2022"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
