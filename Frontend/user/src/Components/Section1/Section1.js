import React from "react";
import "./Section1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { GiMeal } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import DumbbellIcon from "../../Assists/Home/dumbwell.svg";
import MealIcon from "../../Assists/Home/meal.svg";
import YogaIcon from "../../Assists/Home/yoga.svg";
import { useEffect, useState } from "react";
import axios from "axios";


function Section1({ sectionRef }) {


      const [offers, setOffers] = useState([]);

      useEffect(()=> {
        axios.get("http://localhost:5000/api/offers")
        .then((res) => {
          setOffers(res?.data);
          console.log("Fetched offers:", res?.data);
        })
        .catch((err) => {
          console.error("Error fetching offers:", err);
        });

      },[])
console.log('offerssssssssss',offers);


  const cards = [
    {
      id:1,
      title: "Workouts",
      description:
        "Achieve your fitness goals with tailored workout plans designed to improve strength, endurance, and overall well-being.",
      image: DumbbellIcon,
    },
    {
      id:2,
      title: "Meal Tracking",
      description:
        "Keep track of your daily nutrition, monitor calorie intake, and ensure a balanced diet to fuel your fitness journey.",
      image: MealIcon,
    },
    {
      id:3,
      title: "Yoga",
      description:
        "Enhance flexibility, reduce stress, and improve mindfulness with guided yoga sessions for all skill levels.",
      image: YogaIcon,
    },

    { id: 4, title: "null", description: "" },

    { id: 5, title: "null", description: "" },
    { id: 6, title: "null", description: "" },
  ];

  return (
    <>
      <div
        ref={sectionRef}
        className="bg-black pt-1 h-[800px] section-bg bg-overlay-black bg-img"
      >
        <div className=" b ">
          <h1 className="text-white text-3xl section-title ">
            What we <span className="offer">Offer</span>!
          </h1>
          <div className="flex jusitfy-between">
            <p className="text-white paragraph mt-2 ml-2">
              We offer{" "}
              <span className="text-[#E63946] font-bold underline">
                personalized workouts
              </span>
              ,{" "}
              <span className="text-[#E63946] font-bold underline">
                meal tracking
              </span>
              , and{" "}
              <span className="text-[#E63946] font-bold underline">
                yoga sessions{" "}
              </span>
              to help you <br></br>stay fit and healthy{" "}
            </p>
            <div className="flex ml-[489px] gap-3">
              <button className="prev-btn  ">
                <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center pt-[12px] text-2xl cursor-pointer text-red-600 font-bold border-2 border-red-600 hover:bg-red-200 hover:border-red-200">
                  <MdOutlineArrowBackIosNew />
                </div>{" "}
              </button>
              <button className="next-btn">
                <div className="  bg-white rounded-full w-[50px] h-[50px] flex justify-center pt-[12px] text-2xl cursor-pointer text-red-600 font-bold border-2 border-red-600 hover:bg-red-200 hover:border-red-200">
                  <MdArrowForwardIos />
                </div>{" "}
              </button>
            </div>
          </div>
        </div>

        {/* 
            <div className='flex flex-wrap  mt-15'>
                {Cards.map((Card) => (
            <div key={Cards.id} className="w-[360px] p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ml-[160px]">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{Cards.title}</span>
	</div>
	<p className="dark:text-gray-800">{Cards.description}</p>
</div>
))}
            </div> */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }} // Linking buttons
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap gap-20 mt-15 ml-[160px] ">
            {offers.map((card) => (
              <SwiperSlide key={card.id} className="p-4">
                <div className="w-[360px] h-[480px] p-6 rounded-xl shadow-md dark:bg-gray-50 dark:text-gray-900 card">
                  <div className="text-[200px] text-red-700 flex justify-center mt-5">
                    <img className="w-[180px]" src={card.Image} />
                  </div>

                  <div className="mt-6 mb-2">
                    <span className="block text-xs font-bold text-[#f1faee]  tracking-widest uppercase ">
                      {card.title}
                    </span>
                  </div>
                  <p className="dark:text-white mb-10">{card.description}</p>
                  <Link
                    to={`Details/${card._id}`}
                    className="bg-[#E63946]   text-white rounded-xl w-[300px] px-6 py-3 h-[40px]"
                  >
                    Read more!
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Link
          to="ShowMore"
          className="text-white ml-[1076px] hover:text-[#E63946]"
        >
          Show more
        </Link>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"  className="z-auto  absolute " viewBox="0 0 1440 320">
  <path fill="#000000" fill-opacity="1" d="M0,96L24,96C48,96,96,96,144,101.3C192,107,240,117,288,138.7C336,160,384,192,432,208C480,224,528,224,576,197.3C624,171,672,117,720,106.7C768,96,816,128,864,117.3C912,107,960,53,1008,53.3C1056,53,1104,107,1152,133.3C1200,160,1248,160,1296,160C1344,160,1392,160,1416,160L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
</svg>

{/* <img src={} /> */}
    </>
  );
}

export default Section1;
