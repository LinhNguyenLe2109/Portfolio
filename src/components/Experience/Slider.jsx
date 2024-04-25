import React from "react";
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
              `Construct the front-end foundation for the Hackathon registration system`,
              `Developed CRUD APIs, establishing connectivity between the system and a Firebase database.`,
            ]}
            company="Seneca Housing Hackathon Committee"
            startTime="December 2023"
            endTime="March 2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            Icon={FiCodesandbox}
            title={"Co-op, Software Engineer"}
            desc={[
              `Worked in an Agile environment, maintained a SaaS product that tracks live data, produces reports`,
              `Collaborated with senior engineers to demonstrate new features, quality-of-life improvements.`,
              `Introduced Tailwind, streamlined front-end development and minimized CSS codebase by 80%.`,
              `Updated Webpack configuration file, reduced compile time for development environment by 50%.`,
              `Built an API that can be used for multiple datapoints.`,
            ]}
            company="PAR Canada ULC"
            startTime="September 2023"
            endTime="December 2023"
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
            endTime="August 2023"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            Icon={HiDesktopComputer}
            title={"Web developer"}
            desc={[
              `Developed and maintained internal and external websites with AODA compliance.`,
              `Enhanced a website module, enabling users to efficiently search a comprehensive list of schools.`,
              `Provided assistance to seniors in developing Alternative School and CEBSA sections.`,
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
