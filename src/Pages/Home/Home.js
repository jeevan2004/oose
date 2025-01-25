import React from "react";
import AboutSec from "../../Components/aboutSec/AboutSec";
import HomeBanner from "../../Components/homeBanner/HomeBanner";

import Faq from "../../Components/faq/Faq";
import Categories from "../../Components/Categories/Categories";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Instructors from "../../Components/Instructors/Instructors";
import TopCourse from "../../Components/TopCourse/TopCourse";
import Features from "../../Components/Features/Features";
import Member from "../../Components/Member/Member";
import Brand from "../../Components/Brand/Brand";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import Testimonial from "../../Components/testimonial/Testimonial";
import CityBox from "../../Components/City/CityBox";
import ServiceBox from "../../Components/ServiceBox/ServiceBox";
import Overview from "../../Components/Overview/Overview";
import Find from "../../Components/Find/Find";
import service1 from "../../assets/image/findEasy.png";
import service2 from "../../assets/image/stay-easy.png";
import service3 from "../../assets/image/bond-easy.png";
import ManagementModules from "../../Components/ManagementModules/ManagementModules";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <CityBox />
      <div className="pt-5">
        <ServiceBox img={service1} />
      </div>
      <Features />

      <div className="pt-5">
        <ServiceBox img={service2} className="flex-row-reverse" />
      </div>
      {/* <div className="pt-5">
        <ServiceBox img={service3} />
      </div> */}
      <Overview />
      {/* <Find /> */}
      <ManagementModules />
      {/* <Categories /> */}
      <section className="p-100">
        <AboutSec ordser={0} />
      </section>

      {/* <TopCourse /> */}

      {/* <NewsLetter /> */}
      <GetInTouch />

      <Testimonial />
      {/* <Instructors /> */}

      {/* <Faq /> */}
      {/* <Brand /> */}
      {/* <Features /> */}
      {/* <Member /> */}
    </>
  );
};

export default Home;
