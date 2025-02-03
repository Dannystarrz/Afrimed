'use client'
import Image from "next/image";
import { backToTopIcon, idea, instaLogo, linkedInLogo, xLogo } from "./icons";
import BestDoctorsCard from "./components/BestDoctorsCard";
import TestimonialCard from "./components/TestimonialCard";
import KeyBenefits from "./components/KeyBenefits";
import { useRouter } from "next/navigation";
import MobileNav from "./components/MobileNav";

export default function Home() {

  const navigate = useRouter()

  return (
    <div className="w-full h-full bg-[#FCFCF7]">
      {/* <div className="w-full h-screen flex justify-center items-center lg:hidden text-center bg-contain bg-center bg-no-repeat bg-[url('/doctor.png')]">
        <div className="flex flex-col gap-3 items-center backdrop-blur-lg bg-white/50 w-full h-full px-4 justify-center">
          <Image
            src={"/AfrimedLogo.svg"}
            alt="Afrimed logo"
            height={32}
            width={99}
          />
          <h2 className="font-bold text-2xl">Best Viewed on Desktop</h2>
          <p className="font-medium text-base text-justify">
            Thank you for visiting! Our website is currently optimized for
            desktop viewing only. To experience the full functionality and
            design, please access this site from a laptop or desktop computer.
            We’re working to bring mobile compatibility soon—stay tuned for
            updates!
          </p>
        </div>
      </div> */}
      <MobileNav/>

      <nav
        className="flex max-md:hidden justify-between items-center px-12 py-6"
        id="top"
      >
        <div className="flex gap-10 items-center">
          <Image
            src={"/AfrimedLogo.svg"}
            alt="Afrimed logo"
            height={32}
            width={99}
          />

          <div className="flex gap-5 items-center">
            <p className="text-[#5D34F3] underline font-bold">Home</p>
            <p className="hover:text-[#5D34F3] hover:underline">Features</p>
            <p className="hover:text-[#5D34F3] hover:underline">AI-Chats</p>
            <p className="hover:text-[#5D34F3] hover:underline">Testimonials</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg py-4 px-10 font-bold hover:bg-[#E8E2FD]"
            onClick={() => navigate.push("/login")}
          >
            Login
          </button>
          <button
            className="rounded-lg py-4 px-10 bg-[#5D34F3] font-bold text-[#FFFCFC] hover:bg-[#3A0DDE]"
            onClick={() => navigate.push("/signUp")}
          >
            Sign up
          </button>
        </div>
      </nav>

      <div className="w-full md:pt-20 pt-10 md:px-12 px-6 flex flex-col md:gap-8 gap-6 items-center">
        <h1 className="text-center md:text-[48px] text-[24px] font-bold md:w-[70%] leading-tight">
          A world where
          <span className="text-[#5D34F3] max-md:ml-2 font-medium italic ">healthcare</span>{" "}
          is not just a service but an experience
        </h1>
        <p className="text-center md:text-[20px] text-[14px] md:w-[60%]">
          Our AI-powered doctor-patient consultation platform brings the
          expertise of medical professionals right to your fingertips,
          revolutionizing the way you access healthcare.
        </p>
        <div className="flex max-md:flex-col max-md:pt-12 items-center md:gap-6 gap-3">
          <button className="rounded-lg md:py-4 py-2 md:px-10 px-5 bg-[#5D34F3] hover:bg-[#3A0DDE] font-bold text-[#FFFCFC] md:text-[20px] text-[14px]"
          onClick={()=>{navigate.push('/signUp')}}
          >
            Join now
          </button>
          <button className="rounded-lg md:py-4 py-2 md:px-10 px-5 font-bold border hover:bg-[#E8E2FD] border-[#5D34F3] text-[#5D34F3] md:text-[20px] text-[14px]"
          onClick={()=>{navigate.push('/login')}}
          >
            Get your heart result classification
          </button>
        </div>

        <Image
          src={"/afrimedMacbook.png"}
          alt="web app view"
          width={1024}
          height={623.5}
          className="md:w-4/5 w-full h-auto md:my-16 my-8"
        />
      </div>
      <div className="w-full flex flex-col gap-24 items-center">
        <div className="flex flex-col items-center">
          <h3>Key benefits of AriMed</h3>
          <h2 className="font-bold md:text-[36px] text-[24px]">Features</h2>
        </div>

        <div className="flex max-md:flex-col md:gap-6 gap-3 w-full md:px-12 px-6 items-center md:mb-16 mb-8 max-h-fit">
          <KeyBenefits
            svgSource={"/AI.svg"}
            altText={"ai logo"}
            header={"AI-Powered Chatbot"}
            description={
              "Leverage AI chat to augment diagnostic capabilities, leading to quicker and more accurate assessments."
            }
          />

          <KeyBenefits
            svgSource={"/VideoAndCall.svg"}
            altText={"video and call logo"}
            header={"Video and Call Consultations"}
            description={
              "Benefit from the convenience of remote consultations without compromising the quality of medical care."
            }
          />

          <KeyBenefits
            svgSource={"/Message.svg"}
            altText={"message logo"}
            header={"Secure Messaging"}
            description={
              "Discuss non-urgent matter all within a private and secure messaging environment."
            }
          />

          <KeyBenefits
            svgSource={"/Lock.svg"}
            altText={"Lock logo"}
            header={"Electronic Health Record"}
            description={
              "Doctors benefit from quick access to comprehensive patient data, allowing for more informed and personalized consultations."
            }
          />
        </div>
      </div>

      <section className="flex max-md:flex-col w-full justify-between items-center md:px-16 px-6 md:py-16 py-8">
        <div className="md:w-fit md:h-fit w-full relative">
          <Image
            src={"/Hero Pict.png"}
            alt="A Nurse pointing at the features"
            width={547}
            height={444}
            className="w-[547px] h-[444px] max-md:hidden"
          />
          <div className="md:w-[65%] w-full flex gap-3 items-center px-5 py-1 bg-[#0000001A] backdrop-blur-sm rounded md:absolute bottom-0 left-0 ">
            <p className="text-[#5D34F3] font-bold text-[56px]">#</p>
            <p className="text-[#5D34F3] font-bold italic text-[20px]">
              Experience the Future of Healthcare
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-2/5 w-full">
          <h2 className="font-bold text-[#020202] md:text-[40px] text-[36px] max-md:mt-5 max-md:text-center w-full">
            Discover the Seamless Journey
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex md:gap-8 gap-6 items-center">
              <div className="flex flex-col md:gap-2 items-center">
                <p className="md:text-[48px] text-[32px] text-[#5D34F3] italic">01</p>
                <div className="md:border-r-4 border-r-2 md:h-[58px] h-[38px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col md:gap-2">
                <p className="font-semibold md:text-[28px] text-[20px] text-[#020202]">
                  Sign Up as a Patient/Doctor:
                </p>
                <p className="font-normal md:text-[18px] text-[14px] text-[#6B6666]">
                  Submit the form on the register page.
                </p>
              </div>
            </div>
            <div className="flex md:gap-8 gap-6 items-center">
              <div className="flex flex-col md:gap-2 items-center">
                <p className="md:text-[48px] text-[32px] text-[#5D34F3] italic">02</p>
                <div className="md:border-r-4 border-r-2 md:h-[58px] h-[38px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col md:gap-2">
                <p className="font-semibold  md:text-[28px] text-[20px] text-[#020202]">
                  Appointment Scheduling:
                </p>
                <p className="font-normal md:text-[18px] text-[14px] text-[#6B6666]">
                  Enable patients and doctors to schedule virtual consultations
                  based on their preferred time slots.
                </p>
              </div>
            </div>
            <div className="flex md:gap-8 gap-6 items-center">
              <div className="flex flex-col md:gap-2 items-center">
                <p className="md:text-[48px] text-[32px] text-[#5D34F3] italic">03</p>
                <div className="md:border-r-4 border-r-2 md:h-[58px] h-[38px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col md:gap-2">
                <p className="font-semibold  md:text-[28px] text-[20px] text-[#020202]">
                  Consultations:
                </p>
                <p className="font-normal md:text-[18px] text-[14px] text-[#6B6666]">
                  Utilize the platform's tools for effective communication and
                  examination.
                </p>
              </div>
            </div>
            <div className="flex md:gap-8 gap-6 items-center">
              <div className="flex flex-col md:gap-2 items-center">
                <p className="md:text-[48px] text-[32px] text-[#5D34F3] italic">04</p>
                <div className="md:border-r-4 border-r-2 md:h-[58px] h-[38px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col md:gap-2">
                <p className="font-semibold  md:text-[28px] text-[20px] text-[#020202]">
                  AI-Powered Chat:
                </p>
                <p className="font-normal md:text-[18px] text-[14px] text-[#6B6666]">
                  Access AI-powered chats for seamless diagnostic process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex max-md:flex-col-reverse">
        <div className="bg-[#F2F6FA] md:w-1/2 md:pl-12 px-6 md:py-10 py-5 flex flex-col md:gap-4 gap-2">
          <div className="flex items-center gap-3">
            <Image
              src={"/Waving20hand.svg"}
              alt="waving hand"
              width={32}
              height={32}
            />
            <p className="text-[#5D34F3] font-normal text-base w-[65%]">
              Get Free Heart Diagnosis!
            </p>
          </div>
          <h2 className="font-bold md:text-[40px] text-[32px] text-[#252424] md:w-[65%] w-full leading-tight">
            Need quick heart classification?
          </h2>
          <p className="font-normal text-[#6B6666] md:text-xl text-lg md:w-[65%] w-full">
            If you having any heart issues symptoms, click the button below to
            fill a fom and get your heart classification.
          </p>

          <button className="rounded-lg md:py-4 py-2 md:px-10 px-5 bg-[#5D34F3] hover:bg-[#3A0DDE] w-fit font-bold text-[#FFFCFC] md:text-[20px] text-[16px]"
          onClick={()=>{navigate.push('/signUp')}}
          >
            Try it for free
          </button>
        </div>
        <div className="bg-[url('/scanimage.png')] bg-no-repeat bg-center bg-cover md:w-1/2 w-full md:min-h-full max-md:h-[200px]"></div>
      </section>

      <section className="flex max-md:flex-col w-full">
        <div className="md:w-1/2 w-full relative flex flex-row-reverse md:py-24 py-16">
          <Image
            width={388}
            height={409}
            src={"/doctor.png"}
            alt="doctor"
            className=""
          />
          <div className="rounded-lg bg-white shadow-md z-30 md:px-8 px-6 py-4 absolute bottom-16 md:right-32 right-10 md:w-[60%] w-[80%]">
            <div className="flex items-center md:gap-8 gap-4">
              {idea}
              <p className="font-medium text-[#020202] md:text-lg text-md">
                Get Tips About Your Health
              </p>
            </div>
            <p className="font-normal text-[#6B6666] text-sm">
              Make informed decisions about your health with the support of
              cutting-edge technology{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full grow flex flex-col justify-center md:gap-6 gap-3 items-center md:px-16 px-6">
          <p className="font-bold md:text-[2rem] text-[1.5rem] text-[#252424]">
            Get quick responses from AI Medic, our{" "}
            <span className="italic text-[#5D34F3] font-normal">
              AI-Powered Chat
            </span>
          </p>
          <p className="font-normal md:text-xl text-lg text-[#6B6666]">
            Seamlessly navigate consultations, access quick responses, and
            experience a revolutionary approach to healthcare.
          </p>
          <div className="flex max-md:flex-col w-full md:gap-6 gap-3">
            <button className="rounded-lg py-3 md:px-10 bg-[#5D34F3] hover:bg-[#3A0DDE] font-bold text-[#FFFCFC] md:text-[20px] text-[16px]"
            onClick={()=>{navigate.push('/signUp')}}
            >
              Get started
            </button>
            <button className="rounded-lg py-3 md:px-10 font-bold border border-[#5D34F3] hover:bg-[#E8E2FD] text-[#5D34F3] text-[20px] text-[16px]"
            onClick={()=>{navigate.push('/login')}}
            >
              Login
            </button>
          </div>
        </div>
      </section>

      <section className="relative text-white md:py-16 py-8 md:my-24 my-20 inset-0 transform -skew-y-3 bg-[#5D34F3]">
        <div className="relative flex justify-around items-center max-w-5xl mx-auto px-4">
          {/* Each stat item */}
          <div className="text-center">
            <p className="md:text-3xl text-lg font-bold">300+</p>
            <p className="md:text-sm text-xs">Verified Specialist</p>
          </div>
          <div className="text-center">
            <p className="md:text-3xl text-lg font-bold">1200+</p>
            <p className="md:text-sm text-xs">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="md:text-3xl text-lg font-bold">80%</p>
            <p className="md:text-sm text-xs">Positive Feedback</p>
          </div>
          <div className="text-center">
            <p className="md:text-3xl text-lg font-bold">1500+</p>
            <p className="md:text-sm text-xs">Online Consultation</p>
          </div>
        </div>
      </section>

      <section className="w-full md:px-12 px-6 flex flex-col md:gap-16 gap-8 md:pt-5 pt-3 items-center">
        <p className="font-bold md:text-[2rem] text-[1.5rem] text-[#252424]">
          Meet some of Our
          <span className="italic text-[#5D34F3] max-md:ml-3 font-normal">
            best Doctors
          </span>
        </p>
        <div className="w-full flex max-md:flex-col max-md:gap-6 md:justify-between">
          <BestDoctorsCard imageSource={"/doc1.png"} />
          <BestDoctorsCard imageSource={"/doc2.png"} />
          <BestDoctorsCard imageSource={"/doc3.png"} />
          <BestDoctorsCard imageSource={"/doc4.png"} />
        </div>
      </section>

      <section className="w-full md:px-12 px-6 flex md:mt-16 mt-8 flex-col md:gap-10 gap-5 md:pt-16 pt-8 items-center">
        <p className="font-bold md:text-[2rem] text-[1.5rem] text-[#252424]">Testimonials</p>

        <div className="w-full flex max-md:flex-col md:px-8 md:py-4 py-2 md:gap-8 gap-4 overflow-x-auto">
          <TestimonialCard
            style={
              "p-6 md:w-[80%] w-full flex shadow-md max-md:text-justify flex-col md:gap-10 gap-5 bg-white rounded"
            }
          />
          <TestimonialCard
            style={
              "p-6 md:w-[80%] w-full flex shadow-md max-md:text-justify flex-col md:gap-10 gap-5 bg-white rounded"
            }
          />
          <TestimonialCard
            style={
              "p-6 md:w-[80%] w-full flex shadow-md max-md:text-justify flex-col md:gap-10 gap-5 bg-white rounded"
            }
          />
        </div>

        <div className="flex"></div>
      </section>

      <section className="w-full md:py-16 py-8 max-md:px-6 flex md:mt-32 mt-16 flex-col md:gap-8 gap-4 md:items-center bg-[#5D34F3]">
        <p className="text-white md:text-2xl text-xl font-semibold">
          Subscribe toAfriMed Newsletter
        </p>
        <div className="flex md:w-[35%] w-full h-fit rounded md:overflow-hidden">
          <input
            className="grow md:pl-5 pl-2 bg-[#F6F6F64D] placeholder-white"
            placeholder="Enter your email address"
          />
          <button className="font-normal md:text-base text-sm text-white md:py-4 py-2 md:px-7 px-4 w-fit bg-[#2C1E60] hover:bg-[#442E94]">
            Subscribe
          </button>
        </div>
      </section>

      <footer className="bg-[#221B3B] flex flex-col md:gap-16 gap-8 md:px-16 px-6 md:pt-16 pt-8">
        <div className="flex max-md:gap-6 max-md:flex-col md:items-center md:justify-between">
          <Image
            src={"/AfrimedLogo.svg"}
            alt="Afrimed logo"
            height={32}
            width={99}
          />

          <div className="flex max-md:flex-col md:gap-32 gap-8">
            <div className="flex flex-col md:gap-3 gap-2">
              <p className="text-white md:text-base text-md font-bold md:mb-2 mb-1">Services</p>
              <p className="font-light md:text-sm text-xs text-white">
                AI-Powered Chatbot (AI Medic)
              </p>
              <p className="font-light md:text-sm text-xs text-white">
                Virtual Consultations
              </p>
              <p className="font-light md:text-sm text-xs text-white">
                Appointment Management
              </p>
              <p className="font-light md:text-sm text-xs text-white">Secure Messaging</p>
            </div>

            <div className="flex flex-col md:gap-3 gap-2">
              <p className="text-white md:text-base text-md font-bold md:mb-2 mb-1">Legal</p>
              <p className="font-light md:text-sm text-xs text-white">
                Terms and conditions
              </p>
              <p className="font-light md:text-sm text-xs text-white">Privacy</p>
              <p className="font-light md:text-sm text-xs text-white">Support</p>
            </div>

            <div className="flex flex-col md:gap-3 gap-2">
              <p className="text-white md:text-base text-md font-bold md:mb-2 mb-1">About Us</p>
              <p className="font-light md:text-sm text-xs text-white">
                Email: afrimed@gmail.com
              </p>
              <p className="font-light md:text-sm text-xs text-white">
                Contact: 08000098967{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col w-full border-t md:py-5 py-3 border-white items-center justify-between">
          <div className="flex md:gap-4 gap-2 items-center md:mb-2 mb-1">
            <p className="text-white md:text-base text-md font-bold">Connect with us</p>
            <div className="flex gap-2 items-center">
              {xLogo} {instaLogo} {linkedInLogo}
            </div>
          </div>

          <p className="font-light text-sm text-white">
            Copyright ©afrimed. 2024. All right reserved
          </p>

          <a
            className="flex items-center gap-2 hover:cursor-pointer group"
            href="#top"
          >
            <p className="font-light text-sm text-white group-hover:font-normal">Back to Top</p>
            {backToTopIcon}
          </a>
        </div>
      </footer>
    </div>
  );
}
