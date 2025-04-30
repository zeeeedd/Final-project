import { Link } from "react-router-dom";
import { RiArrowDownWideLine } from "react-icons/ri";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CustomerServiceImage from "../../Assists/Home/customer_service.png";

function Contact({ContactSection}) {
  return (
    <>
   
    
      <section id="contact" className=" bg-[#EEEEEE] h-[1700px]    pt-2 mt-40 ">
        <div className="w-[700px] h-[150px] bg-gradient-to-br from-[#E63946] to-[#000000] mb-5  mt-30 ml-[390px] rounded-4xl flex justify-center static ">
          <h1 className="text-white  pb-3 text-4xl mt-14 font">
            We'd love to hear from you.
          </h1>
          <div className="w-[1160px] h-[1600px] top-[2150px] rounded-3xl bg-white shadow-2xl absolute flex">
            <div className=" w-[420px] h-[510px] mt-2 ml-2  pt-1">
              <h1 className="mt-5 text-start  ml-12 text-5xl font text-[#e63946]">
                Let's Talk
              </h1>
              <p className="ml-12 mt-5 text-start w-[540px] text-gray-500">
                Have a question or want to discuss something? Fill out the form
                below, and we’ll get back to you as soon as possible. Whether
                it's feedback, collaboration, or just a quick hello.
              </p>
              <div className="flex gap-20  ">
                <div>
                  <form
                    noValidate=""
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                  >
                    <div className="flex gap-5 mt-18 ml-5">
                      <label className="">
                        <input
                          type="text"
                          placeholder="Name"
                          className="block w-[270px] h-[40px] pl-4 rounded-full shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-[#ec9a9a] text-[#f1faee] placeholder:text-[#f1faee] placeholder:italic  "
                        />
                      </label>
                      <label className="block">
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          className="block w-[270px]  h-[40px] rounded-full shadow-sm outline-none bg-[#ec9a9a]  text-[#f1faee] placeholder:text-[#f1faee] placeholder:italic  pl-4 "
                        />
                      </label>
                    </div>
                    <label className="block ">
                      <input
                        type="number"
                        placeholder="Phone"
                        className=" block w-[559px] ml-5  h-[40px] rounded-full shadow-sm outline-none text-[#f1faee] placeholder:text-[#f1faee] placeholder:italic   bg-[#ec9a9a] placeholder:italic pl-4"
                      />
                    </label>
                    <label className="block ml-5">
                      <textarea
                        rows="3"
                        placeholder="message"
                        className="  bg-[#ec9a9a] text-[#f1faee] placeholder:text-[#f1faee] placeholder:italic pl-4 pt-2 block w-[559px] h-[100px] ml-1 rounded-2xl focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 "
                      ></textarea>
                    </label>
                    <button
                      type="button"
                      className=" self-start w-[559px] px-12 py-2 ml-5 text-lg rounded-3xl focus:ring hover:ring focus:ring-opacity-75 bg-[#e63946] dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600  button-support"
                    >
                      Submit
                    </button>
                  </form>
                </div>

             
                  <img src={CustomerServiceImage} className="  customer-service " />
                  
               
              </div>
              <h1 className=" text-start ml-12 text-5xl font text-[#e63946] mt-10 ">Our Infos:</h1>
              <div className="flex ml-12 gap-20 mt-10 w-[1400px]">
                
                {/* Phone part */}
                <div className="w-[300px] h-[170px] bg-[#e63946] shadow-2xl p-4 rounded-3xl pl-9">
                  <div className="flex items-center gap-4 mt-3 ">
                    <FaPhone className="text-4xl text-white" />
                    <h1 className="titles text-lg text-start flex number-title text-white">
                      +(212) 6 21 73 79 04
                    </h1>
                  </div>
                  <p className="text-[13px] flex text-start mt-2  text-white font-bold phone-paragraph">
                    Need immediate assistance? Give us a call anytime! We’re
                    here to answer your questions.
                  </p>
                </div>

                {/* Email Part */}
                <div className="w-[300px] h-[170px] shadow-2xl bg-[#e96a70] p-4 rounded-3xl pl-9">
                  <div className="flex items-center gap-4  mt-3  ">
                    <MdEmail className="text-4xl text-gray-300" />
                    <h1 className="titles text-lg text-start flex email-title text-gray-300">
                      example@gmail.com
                    </h1>
                  </div>
                  <p className="text-[13px] flex text-start mt-2 font-bold text-gray-300 email-paragraph">
                    {" "}
                    Have inquiries or feedback? Reach out to us via email, and
                    we’ll get back to you as soon as possible.
                  </p>
                </div>

                {/* Location Part */}
                <div className="w-[300px] h-[170px] shadow-2xl p-4 rounded-3xl pl-9">
                  <div className="flex items-center gap-4   mt-3 ">
                    <FaLocationDot className="text-4xl" />
                    <h1 className="titles text-lg text-start flex location-title">
                      CasaBlanca,Morocco
                    </h1>
                  </div>
                  <p className="text-[13px] flex text-start mt-2 font-bold location-paragraph">
                    Visit us in Casablanca! Whether you need in-person support
                    or just want to say hello.
                  </p>
                </div>
              </div>
              <h1 className=" text-start ml-12 text-5xl font text-[#e63946] mt-10 ">Our location:</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7394855235048!2d-7.6376011246192865!3d33.58611267333614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d32ec3453e55%3A0xd5fd14fe98e62b80!2sGOMYCODE%20Casablanca!5e0!3m2!1sfr!2sma!4v1742298237187!5m2!1sfr!2sma"
                width="800"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="ml-40 mt-15 rounded-2xl shadow-xl"
              ></iframe>

              <ul className="wrapper ">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <svg
                    viewBox="0 0 320 512"
                    height="1.2em"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <svg
                    height="1.8em"
                    fill="currentColor"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="twitter"
                  >
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                  </svg>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.2em"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </li>
              </ul>

              {/* <div className=''> */}

              {/* <div className='text-start mt-10 ml-5 text-white'> */}
              {/* Phone part */}
              {/* <div className='flex gap-5'>
                     <FaPhone className='text-4xl' />
                    <h1 className='titles mb-2 pt-1  font'>Call us!</h1>
                    </div>
                    <span className=' ml-14 '>+212 6 21 73 79 04</span> */}

              {/* Email Part  */}
              {/* <div className='flex gap-5 mt-5'>
                    <MdEmail className='text-4xl' />
                    <h1  className='titles mt-1 font'>Email us!</h1>
                    </div>
                    <span className='ml-14'>test@gmail.com</span> */}

              {/* Socials Part  */}
              {/* <h1  className='titles mb-2  ml-11 mt-7 font'>Follow:</h1> */}

              {/* Location Part  */}
              {/* <FaLocationDot /> */}
              {/* </div> */}
              {/* </div> */}
            </div>
            <div className="ml-8"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
