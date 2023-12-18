import React from "react";
import Navbar from "../component/NavBar";
import MainBg1 from "../assets/img/background/main-bg.jpg";
import AboutImg from "../assets/img/chat-poster.png";
import Icon1 from "../assets/img/icon/icon-1.png";
import Icon2 from "../assets/img/icon/icon-2.png";
import Icon3 from "../assets/img/icon/icon-3.png";
import Icon4 from "../assets/img/icon/icon-4.png";
import Icon5 from "../assets/img/icon/icon-5.png";
import Step6 from "../assets/img/6-step.png";
import level1 from "../assets/img/background/level-1-cover.jpg";
import level2 from "../assets/img/background/level-2-cover.jpg";
import level3 from "../assets/img/background/level-3-cover.jpg";
import levelImg1 from "../assets/img/level1/the-source.jpg";
import levelImg2 from "../assets/img/level1/maximus-gladiator.jpg";
import levelImg3 from "../assets/img/level1/the-dragon-inside-me.jpg";
import levelImg4 from "../assets/img/level1/add-1.png";
import level2Img1 from "../assets/img/level2/the-invisible-spy.jpg";
import level2Img2 from "../assets/img/level2/the-thought-snatcher_7qec4nv.jpg";
import level2Img3 from "../assets/img/level2/the-legend-of-black-shuck.jpg";
import level2Img4 from "../assets/img/level2/add-2.png";
import level3Img1 from "../assets/img/level3/influence_m4a9ibn.jpg";
import level3Img2 from "../assets/img/level3/warning-signs.jpg";
import level3Img3 from "../assets/img/level3/micro.jpg";
import level3Img4 from "../assets/img/level3/add-3.png";
import { Slider } from "../slider/Slider";
import aboutBook from "../assets/img/aboutbook.jpg";
import { useScroll, motion, transform } from "framer-motion";
import useMediaQuery from "../mediaQuery/mediaQuery";
import { useIsSmall } from "../hooks/utils/small";
import { useIsMedium } from "../hooks/utils/medium";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const IsSmall = useIsSmall();
  const IsMedium = useIsMedium();

  return (
    <>
      <Navbar status={"home"} />
      <section className="w-auto h-[50vh] sm:h-[100vh]">
        {/* <img src={MainBg1} className="w-[100%] h-[100vh] object-fill " alt="" /> */}
        <Slider />
      </section>
      {/* About Us  */}
      <section className="p-[2rem] sm:p-[4rem] bg-[rgba(164,164,164,0.2)]">
        <div className="text-center">
          <h1 className="  font-bold sm:text-5xl text-3xl  text-black ">
            About Us
          </h1>
        </div>
        <div className="container my-[5rem]">
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <img
              src={AboutImg}
              className="  relative -top-16 -left-12 z-50 drop-shadow-lg animate-pulse "
              // className=" drop-shadow-lg animate-pulse relative
              alt=""
            />
            <img
              src={aboutBook}
              className="absolute w-[400px] ml-[2rem] sm:w-[500px] sm:ml-0"
            ></img>
            <motion.div
              initial={{ translateX: 0 }}
              whileInView={
                IsMedium
                  ? { translateX: -50 }
                  : IsSmall
                  ? { translateX: -30 }
                  : { translateX: -10 }
              }
              transition={{ duration: 0.9 }}
              className="sm:mt-[9rem] md:mt-[7rem] xl:mt-[2rem]"
            >
              <h1 className="  font-bold text-xl sm:text-3xl text-seconday mt-[45%] sm:mt-0">
                WHY READING IS IMPORTANT ?
              </h1>

              <hr />
              <p className="font-bold pt-[3rem]">
                Reading plays a significant role in a child's education by
                prepping them after school life. It is key for acquiring good
                study habits and builds the foundation for communication &
                connection. Studies suggest that students who have read more
                books and read on a regular basis have better school results
                <br />
                <br />
                Apart from language and understanding, reading habit nurtures a
                kid's creativity, improves focus, adaptability to new things,
                and develops problem-solving skills for life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSING FICTION EXPRESS READING LIVE  */}
      <section className="p-[2rem] bg-[rgba(174,171,171,0.48)]">
        <div className="text-center">
          <h1 className="  font-bold md:text-4xl lg:text-5xl sm:text-3xl text-3xl ">
            Why Choosing Fiction Express Reading Live
          </h1>
        </div>
        {/* <div className="container my-[5rem]">
          <div className=" bg-gray-200 mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 absolute border-opacity-20 z-0 border-gray-700 h-full border"
                style={{ left: "50%" }}
              ></div>

              <div className="mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-30 flex items-center order-1  bg-[#13828f] shadow-xl border-dashed border-[rgb(245,191,120)] border-2  w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-[rgb(255,255,255)]">
                    1
                  </h1>
                </div>
                <motion.div
                  className="order-1  bg-[#adf1f772] rounded-lg shadow-xl w-5/12 px-6 py-4 "
                  initial={{ translateX: 0 }}
                  whileInView={{ translateX: -50 }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="flex justify-start items-center gap-2 ">
                    <img
                      src={Icon1}
                      className="h-[60px] w-auto  drop-shadow-md "
                      alt=""
                    />
                    <p className="text-left font-bold text-black ">
                      GUIDED READING NOTES & GLOSSARY
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-30 flex items-center order-1  bg-[#13828f] shadow-xl border-dashed border-[rgb(245,191,120)] border-2  w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-[rgb(255,255,255)] font-semibold text-lg">
                    2
                  </h1>
                </div>
                <motion.div
                  className="order-1  bg-[#f7dbad72] rounded-lg shadow-xl w-5/12 px-6 py-4"
                  initial={{ translateX: -200 }}
                  whileInView={{ translateX: -20 }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={Icon2}
                      className="h-[60px] w-auto  drop-shadow-md "
                      alt=""
                    />
                    <p className="text-left font-bold text-black">
                      VOCABULARY AND GRAMMAR BUILDER WORKSHEET
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-30 flex items-center order-1  bg-[#13828f] shadow-xl border-dashed border-[rgb(245,191,120)] border-2  w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-[rgb(255,255,255)]">
                    3
                  </h1>
                </div>
                <motion.div
                  className="order-1  bg-[#f7adad72] rounded-lg shadow-xl w-5/12 px-6 py-4"
                  initial={{ translateX: 0 }}
                  whileInView={{ translateX: -50 }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={Icon3}
                      className="h-[60px] w-auto  drop-shadow-md "
                      alt=""
                    />
                    <p className="text-left font-bold text-black">
                      COMPREHENSION QUESTIONS
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-30 flex items-center order-1  bg-[#13828f] shadow-xl border-dashed border-[rgb(245,191,120)] border-2  w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-[rgb(255,255,255)] font-semibold text-lg">
                    4
                  </h1>
                </div>
                <motion.div
                  className="order-1  bg-[#f7add272] rounded-lg shadow-xl w-5/12 px-6 py-4"
                  initial={{ translateX: -200 }}
                  whileInView={{ translateX: -20 }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={Icon4}
                      className="h-[60px] w-auto  drop-shadow-md "
                      alt=""
                    />
                    <p className="text-left font-bold text-black">
                      OPEN DISCUSSION ACTIVITIES
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-30 flex items-center order-1  bg-[#13828f] shadow-xl border-dashed border-[rgb(245,191,120)] border-2  w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-[rgb(255,255,255)]">
                    5
                  </h1>
                </div>
                <motion.div
                  className="order-1  bg-[#e6f7ad72] rounded-lg shadow-xl w-5/12 px-6 py-4"
                  initial={{ translateX: 0 }}
                  whileInView={{ translateX: -50 }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={Icon5}
                      className="h-[60px] w-auto  drop-shadow-md "
                      alt=""
                    />
                    <p className="text-left font-bold text-black">
                      ACCESS TO 100+ FICTION EXPRESS BOOKS
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div> */}

        <motion.div
          className="order-1  bg-[#adf1f772] rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 my-6 mr-4 sm:mr-0"
          initial={
            IsMedium
              ? { translateX: -200 }
              : IsSmall
              ? { translateX: -100 }
              : { translateX: 30 }
          }
          whileInView={
            IsMedium
              ? { translateX: 230 }
              : IsSmall
              ? { translateX: 130 }
              : { translateX: 30 }
          }
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-start items-center gap-2 ">
            <img
              src={Icon1}
              className="h-[60px] w-auto  drop-shadow-md "
              alt=""
            />
            <p className="text-left font-bold text-black ">
              GUIDED READING NOTES & GLOSSARY
            </p>
          </div>
        </motion.div>
        <motion.div
          className="order-1  bg-[#f7dbad72] rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 my-6 mr-4 sm:mr-0"
          // initial={IsMedium ? { translateX: -300 } : { translateX: -200 }}
          initial={
            IsMedium
              ? { translateX: -300 }
              : IsSmall
              ? { translateX: -200 }
              : { translateX: 30 }
          }
          whileInView={
            IsMedium
              ? { translateX: 330 }
              : IsSmall
              ? { translateX: 150 }
              : { translateX: 30 }
          }
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-start items-center gap-2 ">
            <img
              src={Icon2}
              className="h-[60px] w-auto  drop-shadow-md "
              alt=""
            />
            <p className="text-left font-bold text-black">
              VOCABULARY AND GRAMMAR BUILDER WORKSHEET
            </p>
          </div>
        </motion.div>
        <motion.div
          className="order-1  bg-[#f7adad72] rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 my-6 mr-4 sm:mr-0"
          // initial={IsMedium ? { translateX: -300 } : { translateX: -200 }}
          initial={
            IsMedium
              ? { translateX: -400 }
              : IsSmall
              ? { translateX: -300 }
              : { translateX: 30 }
          }
          whileInView={
            IsMedium
              ? { translateX: 430 }
              : IsSmall
              ? { translateX: 170 }
              : { translateX: 30 }
          }
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-start items-center gap-2">
            <img
              src={Icon3}
              className="h-[60px] w-auto  drop-shadow-md "
              alt=""
            />
            <p className="text-left font-bold text-black">
              COMPREHENSION QUESTIONS
            </p>
          </div>
        </motion.div>
        <motion.div
          className="order-1  bg-[#f7add272] rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4 mr-4 sm:mr-0"
          // initial={IsMedium ? { translateX: -300 } : { translateX: -200 }}
          initial={
            IsMedium
              ? { translateX: -500 }
              : IsSmall
              ? { translateX: -400 }
              : { translateX: 30 }
          }
          whileInView={
            IsMedium
              ? { translateX: 530 }
              : IsSmall
              ? { translateX: 190 }
              : { translateX: 30 }
          }
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-start items-center gap-2">
            <img
              src={Icon4}
              className="h-[60px] w-auto  drop-shadow-md "
              alt=""
            />
            <p className="text-left font-bold text-black">
              OPEN DISCUSSION ACTIVITIES
            </p>
          </div>
        </motion.div>
        <motion.div
          className="order-1  bg-[#e6f7ad72] rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4  my-6 mr-4 sm:mr-0"
          // initial={IsMedium ? { translateX: -300 } : { translateX: -200 }}
          initial={
            IsMedium
              ? { translateX: -600 }
              : IsSmall
              ? { translateX: -500 }
              : { translateX: 30 }
          }
          whileInView={
            IsMedium
              ? { translateX: 630 }
              : IsSmall
              ? { translateX: 210 }
              : { translateX: 30 }
          }
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-start items-center gap-2">
            <img
              src={Icon5}
              className="h-[60px] w-auto  drop-shadow-md "
              alt=""
            />
            <p className="text-left font-bold text-black">
              ACCESS TO 100+ FICTION EXPRESS BOOKS
            </p>
          </div>
        </motion.div>
      </section>
      <section className="p-[4rem] bg-[#ffffff]">
        <div className="text-center">
          <h1 className="  font-bold md:text-4xl lg:text-5xl sm:text-3xl text-3xl text-black capitalize ">
            Our 6 Step Methodology
          </h1>
        </div>
        <div className="my-[5rem] flex justify-center">
          <img src={Step6} alt="" />
        </div>
      </section>
      <section className="p-[4rem] bg-[rgba(164,164,164,0.2)]">
        <div className="text-center">
          <h1 className="  font-bold md:text-4xl lg:text-5xl sm:text-3xl text-3xl text-black animate-bounce">
            Enroll Your Child Now !
          </h1>
        </div>
        <div className="container my-[5rem]">
          <div className="flex gap-[3rem] justify-center md:flex-row flex-col">
            <motion.div
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-5"
              initial={{ translateX: -200 }}
              whileInView={{ translateX: 0 }}
              transition={{ duration: 0.9 }}
            >
              <a href="">
                <img
                  src={level1}
                  alt="Laptop on Desk"
                  className="saturate-50 hover:saturate-100 w-[100%] h-[450px] "
                />
                {/* <div className="inline-block !bg-pink-400">
                  <h1 className="text-black"> level 1</h1>
                </div> */}
                <div className="p-6 bg-[rgb(242,194,172)]">
                  <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                    Level 1 | Grade 1-3
                  </h2>
                </div>
              </a>
            </motion.div>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-5">
              <a href="">
                <img
                  src={level2}
                  alt="Laptop on Desk"
                  className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                />
                <div className="p-6 bg-[rgb(242,194,172)] relative">
                  <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                    Level 2 | Grade 4-6
                  </h2>
                </div>
              </a>
            </div>
            <motion.div
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-5"
              initial={{ translateX: -200 }}
              whileInView={{ translateX: -5 }}
              transition={{ duration: 0.9 }}
            >
              <a href="">
                <img
                  src={level3}
                  alt="Laptop on Desk"
                  className="saturate-50 hover:saturate-100 w-[100%] h-[450px] "
                />
                <div className="p-6 bg-[rgb(242,194,172)]">
                  <h2 className="font-bold text-xl md:text-3xl mb-2 text-orange-700">
                    Level 3 | Grade 7-9
                  </h2>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="px-[1rem] sm:p-[4rem] bg-[rgba(164,164,164,0.2)]">
        <div className=" mx-7">
          <section className="px-[1rem] sm:p-[4rem] bg-[rgba(164,164,164,0.2)]">
            <div className="text-center">
              <h1 className="  font-bold md:text-3xl lg:text-4xl sm:text-3xl text-3xl text-seconday">
                A SNEAK-PEAK INTO SOME FICTION EXPRESS TITLES
              </h1>
            </div>
            <div className="container my-[2rem]">
              <div className="flex items-start">
                <h1 className="  font-bold text-3xl ">LEVEL 1</h1>
                <div>
                  <hr />
                </div>
              </div>
              <div className="flex gap-3 justify-center md:flex-row flex-col">
                <div className=" rounded-lg shadow-lg hover:shadow-2xl bg-[rgb(172,219,242)] ">
                  <a href="">
                    <img
                      src={levelImg1}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 ">
                      <h1 className="font-bold   mb-2 ">THE SOURCE</h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={levelImg2}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,219,242)]">
                      <h1 className="font-bold   mb-2 ">MAXIMUX GLADIATOR</h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={levelImg3}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,219,242)]">
                      <h1 className="font-bold   mb-2 ">
                        THE DRAGON INSIDE ME
                      </h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={levelImg4}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,219,242)]">
                      <h1 className="font-bold   mb-2 ">ALL LEVEL 1</h1>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[1rem] sm:px-[4rem] py-[2rem] bg-[rgba(164,164,164,0.2)]">
            <div className="container my-[2rem]">
              <div className="flex items-start">
                <h1 className="  font-bold text-3xl ">LEVEL 2</h1>
                <div>
                  <hr />
                </div>
              </div>
              <div className="flex gap-3 justify-center md:flex-row flex-col">
                <div className="bg-[rgb(172,242,206)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level2Img1}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 ">
                      <h1 className="font-bold   mb-2 ">THE INVISIBLE SPY</h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,242,206)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level2Img2}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,242,206)]">
                      <h1 className="font-bold   mb-2 ">
                        THE THOUGHT SNATCHER
                      </h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,242,206)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level2Img3}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,242,206)]">
                      <h1 className="font-bold   mb-2 ">
                        THE LEGEND OF THE BLACK SHUCK
                      </h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,242,206)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level2Img4}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,242,206)]">
                      <h1 className="font-bold   mb-2 ">ALL LEVEL 2</h1>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="px-[1rem] sm:px-[4rem] py-[2rem] bg-[rgba(164,164,164,0.2)]">
            <div className="container my-[2rem]">
              <div className="flex items-start">
                <h1 className="  font-bold text-3xl ">LEVEL 3</h1>
                <div>
                  <hr />
                </div>
              </div>
              <div className="flex gap-3 justify-center md:flex-row flex-col">
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level3Img1}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 ">
                      <h1 className="font-bold   mb-2 ">INFLUENCE</h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level3Img2}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,219,242)]">
                      <h1 className="font-bold   mb-2 ">WARNING SIGNS</h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level3Img3}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,219,242)]">
                      <h1 className="font-bold   mb-2 ">MICRO</h1>
                    </div>
                  </a>
                </div>
                <div className="bg-[rgb(172,219,242)] rounded-lg shadow-lg hover:shadow-2xl ">
                  <a href="">
                    <img
                      src={level3Img4}
                      alt="Laptop on Desk"
                      className="saturate-50 hover:saturate-100 w-[100%] h-[450px]"
                    />
                    <div className="p-3 bg-[rgb(172,219,242)]">
                      <h1 className="font-bold   mb-2 ">ALL LEVEL 3</h1>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*BookShelf Code*/}
        {/* <section className="bg-[rgba(164,164,164,0.2)]">
        <div className="text-center"></div>
        <div className="bg-[#DFA67B] mx-5 py-5 pb-[2rem]">
          <div className="text-center">
            <h1 className="  font-bold md:text-3xl lg:text-4xl sm:text-3xl text-3xl text-[#4F200D]">
              A SNEAK-PEAK INTO SOME FICTION EXPRESS TITLES
            </h1>
          </div>
          <div className="font-black text-[1.5rem] my-[1rem]">LEVEL 1</div>
          <div className="mt-5 flex gap-[10%] flex-wrap mx-5 justify-center">
            <div className="">
              <div>
                <img src={source} width="150px"></img>
              </div>
              {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div>
            <div className=""> */}
        {/* <div>
                <img src={levelImg2} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div>
            <div className="">
              <div>
                <img src={levelImg3} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div> */}
        {/* // <div className="">
            //   <div>
            //     <img src={level2Img4} width="150px"></img>
            //   </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* // </div> */}
        {/*for next line books*/}
        {/* <div className="mt-[2rem]">
              <div>
                <img src={source} width="150px"></img>
              </div>
            </div> */}
        {/* //   <img src={book_shelf} className="absolute "></img>
          // </div> */}
        {/*Level2 books*/}
        {/* <div className="font-black text-[1.5rem] my-[1.5rem]">LEVEL 2</div>
          <div className="mt-5 flex gap-[10%] flex-wrap mx-5 justify-center">
            <div className="">
              <div>
                <img src={source} width="150px"></img>
              </div>
              {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div>
            <div className="">
              <div>
                <img src={levelImg2} width="150px"></img>
              </div>
              {/* <div className="p-5 bg-primary font-bold w-[150px]"> */}
        {/* the source
              </div> */}
        {/* </div>
            <div className="">
              <div>
                <img src={levelImg3} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div>

            <div className="">
              <div>
                <img src={level2Img4} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div> */}
        {/*for next line books*/}
        {/* <div className="mt-[2rem]">
              <div>
                <img src={source} width="150px"></img>
              </div>
            </div> */}
        {/* <img src={book_shelf} className="absolute "></img>
          </div> */}
        {/*Level 3 Books*/}
        {/* <div className="font-black text-[1.5rem] my-[1.5rem] p-5 ">
            LEVEL 3
          </div>
          <div className="mt-5 flex gap-[10%] flex-wrap mx-5 justify-center">
            <div className="">
              <div>
                <img src={source} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div>
            <div className=""> */}
        {/* <div>
                <img src={levelImg2} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div>
            <div className="">
              <div>
                <img src={levelImg3} width="150px"></img>
              </div> */}{" "}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div> */}
        {/* <div className="">
              <div>
                <img src={level2Img4} width="150px"></img>
              </div> */}
        {/* <div className="p-5 bg-primary font-bold w-[150px]">
                the source
              </div> */}
        {/* </div> */}
        {/*for next line books*/}
        {/* <div className="mt-[2rem]">
              <div>
                <img src={source} width="150px"></img>
              </div>
            </div> */}
        {/* <img src={book_shelf} className="absolute "></img>
          </div>
        </div>
      </section> */}
      </section>
    </>
  );
}
