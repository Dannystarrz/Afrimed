'use client'
import Image from "next/image";
import { backToTopIcon, idea, instaLogo, linkedInLogo, xLogo } from "./icons";
import BestDoctorsCard from "./components/BestDoctorsCard";
import TestimonialCard from "./components/TestimonialCard";
import KeyBenefits from "./components/KeyBenefits";
import { useRouter } from "next/navigation";

export default function Home() {

  const navigate = useRouter()

  return (
    <div className="w-full h-full bg-[#FCFCF7]">
      <div className="w-full h-screen flex justify-center items-center lg:hidden text-center bg-contain bg-center bg-no-repeat bg-[url('/doctor.png')]">
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
      </div>

      <nav
        className="flex max-lg:hidden justify-between items-center px-12 py-6"
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
        <div className="flex items-center">
          <button
            className="rounded-lg py-4 px-10 font-bold"
            onClick={() => navigate.push("/login")}
          >
            Login
          </button>
          <button
            className="rounded-lg py-4 px-10 bg-[#5D34F3] font-bold text-[#FFFCFC]"
            onClick={() => navigate.push("/signUp")}
          >
            Sign up
          </button>
        </div>
      </nav>

      <div className="w-full max-lg:hidden pt-20 px-12 flex flex-col gap-8 items-center">
        <h1 className="text-center text-[48px] font-bold w-[70%] leading-tight">
          A world where{" "}
          <span className="text-[#5D34F3] font-medium italic ">healthcare</span>{" "}
          is not just a service but an experience
        </h1>
        <p className="text-center text-[20px] w-[60%]">
          Our AI-powered doctor-patient consultation platform brings the
          expertise of medical professionals right to your fingertips,
          revolutionizing the way you access healthcare.
        </p>
        <div className="flex items-center gap-6">
          <button className="rounded-lg py-4 px-10 bg-[#5D34F3] font-bold text-[#FFFCFC] text-[20px]">
            Join now
          </button>
          <button className="rounded-lg py-4 px-10 font-bold border border-[#5D34F3] text-[#5D34F3] text-[20px]">
            Get your heart result classification
          </button>
        </div>

        <Image
          src={"/afrimedMacbook.png"}
          alt="web app view"
          width={1024}
          height={623.5}
          className="w-4/5 h-auto my-16"
        />
      </div>
      <div className="w-full max-lg:hidden flex flex-col gap-24 items-center">
        <div className="flex flex-col items-center">
          <h3>Key benefits of AriMed</h3>
          <h2 className="font-bold text-[36px]">Features</h2>
        </div>

        <div className="flex gap-6 w-full px-12 items-center mb-16 max-h-fit">
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

      <section className="flex max-lg:hidden w-full justify-between items-center px-16 py-16">
        <div className="w-fit h-fit relative">
          <Image
            src={"/Hero Pict.png"}
            alt="A Nurse pointing at the features"
            width={547}
            height={444}
            className="w-[547px] h-[444px]"
          />
          <div className="w-[65%] flex gap-3 items-center px-5 py-1 bg-[#0000001A] backdrop-blur-sm rounded absolute bottom-0 left-0">
            <p className="text-[#5D34F3] font-bold text-[56px]">#</p>
            <p className="text-[#5D34F3] font-bold italic text-[20px]">
              Experience the Future of Healthcare
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-2/5">
          <h2 className="font-bold text-[#020202] text-[40px] w-full">
            Discover the Seamless Journey
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[48px] text-[#5D34F3] italic">01</p>
                <div className="border-r-4 h-[58px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[28px] text-[#020202]">
                  Sign Up as a Patient/Doctor:
                </p>
                <p className="font-normal text-[18px] text-[#6B6666]">
                  Submit the form on the register page.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[48px] text-[#5D34F3] italic">02</p>
                <div className="border-r-4 h-[58px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[28px] text-[#020202]">
                  Appointment Scheduling:
                </p>
                <p className="font-normal text-[18px] text-[#6B6666]">
                  Enable patients and doctors to schedule virtual consultations
                  based on their preferred time slots.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[48px] text-[#5D34F3] italic">03</p>
                <div className="border-r-4 h-[58px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[28px] text-[#020202]">
                  Consultations:
                </p>
                <p className="font-normal text-[18px] text-[#6B6666]">
                  Utilize the platform's tools for effective communication and
                  examination.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[48px] text-[#5D34F3] italic">04</p>
                <div className="border-r-4 h-[58px] border-[#020202]"></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[28px] text-[#020202]">
                  AI-Powered Chat:
                </p>
                <p className="font-normal text-[18px] text-[#6B6666]">
                  Access AI-powered chats for seamless diagnostic process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex max-lg:hidden">
        <div className="bg-[#F2F6FA] w-1/2 pl-12 py-10 flex flex-col gap-2">
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
          <h2 className="font-bold text-[40px] text-[#252424] w-[65%] leading-tight">
            Need quick heart classification?
          </h2>
          <p className="font-normal text-[#6B6666] text-xl w-[65%]">
            If you having any heart issues symptoms, click the button below to
            fill a fom and get your heart classification.
          </p>

          <button className="rounded-lg py-4 px-10 bg-[#5D34F3] w-fit font-bold text-[#FFFCFC] text-[20px]">
            Try it for free
          </button>
        </div>
        <div className="bg-[url('/scanimage.png')] bg-no-repeat bg-center bg-cover w-1/2 min-h-full"></div>
      </section>

      <section className="flex w-full max-lg:hidden">
        <div className="w-1/2 relative flex flex-row-reverse py-24">
          <Image
            width={388}
            height={409}
            src={"/doctor.png"}
            alt="doctor"
            className=""
          />
          <div className="rounded-lg bg-white shadow-md z-30 px-8 py-4 absolute bottom-16 right-32 w-[60%]">
            <div className="flex items-center gap-8">
              {idea}
              <p className="font-medium text-[#020202] text-lg">
                Get Tips About Your Health
              </p>
            </div>
            <p className="font-normal text-[#6B6666] text-sm">
              Make informed decisions about your health with the support of
              cutting-edge technology{" "}
            </p>
          </div>
        </div>
        <div className="w-1/2 grow flex flex-col justify-center gap-6 items-center px-16">
          <p className="font-bold text-[2rem] text-[#252424]">
            Get quick responses from AI Medic, our{" "}
            <span className="italic text-[#5D34F3] font-normal">
              AI-Powered Chat
            </span>
          </p>
          <p className="font-normal text-xl text-[#6B6666]">
            Seamlessly navigate consultations, access quick responses, and
            experience a revolutionary approach to healthcare.
          </p>
          <div className="flex w-full gap-6">
            <button className="rounded-lg py-3 px-10 bg-[#5D34F3] font-bold text-[#FFFCFC] text-[20px]">
              Get started
            </button>
            <button className="rounded-lg py-3 px-10 font-bold border border-[#5D34F3] text-[#5D34F3] text-[20px]">
              Login
            </button>
          </div>
        </div>
      </section>

      <section className="relative max-lg:hidden text-white py-16 my-24 inset-0 transform -skew-y-3 bg-[#5D34F3]">
        <div className="relative flex justify-around items-center max-w-5xl mx-auto px-4">
          {/* Each stat item */}
          <div className="text-center">
            <p className="text-3xl font-bold">300+</p>
            <p className="text-sm">Verified Specialist</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">1200+</p>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">80%</p>
            <p className="text-sm">Positive Feedback</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">1500+</p>
            <p className="text-sm">Online Consultation</p>
          </div>
        </div>
      </section>

      <section className="w-full max-lg:hidden px-12 flex flex-col gap-16 pt-5 items-center">
        <p className="font-bold text-[2rem] text-[#252424]">
          Meet some of Our
          <span className="italic text-[#5D34F3] font-normal">
            best Doctors
          </span>
        </p>
        <div className="w-full flex justify-between">
          <BestDoctorsCard imageSource={"/doc1.png"} />
          <BestDoctorsCard imageSource={"/doc2.png"} />
          <BestDoctorsCard imageSource={"/doc3.png"} />
          <BestDoctorsCard imageSource={"/doc4.png"} />
        </div>
      </section>

      <section className="w-full max-lg:hidden px-12 flex mt-16 flex-col gap-10 pt-16 items-center">
        <p className="font-bold text-[2rem] text-[#252424]">Testimonials</p>

        <div className="w-full flex px-8 py-4 gap-8 overflow-x-auto">
          <TestimonialCard
            style={
              "p-6 w-[80%] flex shadow-md flex-col gap-10 bg-white rounded"
            }
          />
          <TestimonialCard
            style={
              "p-6 w-[80%] flex shadow-md flex-col gap-10 bg-white rounded"
            }
          />
          <TestimonialCard
            style={
              "p-6 w-[80%] flex shadow-md flex-col gap-10 bg-white rounded"
            }
          />
        </div>

        <div className="flex"></div>
      </section>

      <section className="w-full max-lg:hidden py-16 flex mt-32 flex-col gap-8 items-center bg-[#5D34F3]">
        <p className="text-white text-2xl font-semibold">
          Subscribe toAfriMed Newsletter
        </p>
        <div className="flex w-[35%] h-fit rounded overflow-hidden">
          <input
            className="grow pl-5 bg-[#F6F6F64D] placeholder-white"
            placeholder="Enter your email address"
          />
          <button className="font-normal text-base text-white py-4 px-7 w-fit bg-[#2C1E60]">
            Subscribe
          </button>
        </div>
      </section>

      <footer className="bg-[#221B3B] max-lg:hidden flex flex-col gap-16 px-16 pt-16">
        <div className="flex items-center justify-between">
          <Image
            src={"/AfrimedLogo.svg"}
            alt="Afrimed logo"
            height={32}
            width={99}
          />

          <div className="flex items-center gap-32">
            <div className="flex flex-col gap-3">
              <p className="text-white text-base font-bold mb-2">Services</p>
              <p className="font-light text-sm text-white">
                AI-Powered Chatbot (AI Medic)
              </p>
              <p className="font-light text-sm text-white">
                Virtual Consultations
              </p>
              <p className="font-light text-sm text-white">
                Appointment Management
              </p>
              <p className="font-light text-sm text-white">Secure Messaging</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-base font-bold mb-2">Legal</p>
              <p className="font-light text-sm text-white">
                Terms and conditions{" "}
              </p>
              <p className="font-light text-sm text-white">Privacy</p>
              <p className="font-light text-sm text-white">Support</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-white text-base font-bold mb-2">About Us</p>
              <p className="font-light text-sm text-white">
                Email: afrimed@gmail.com
              </p>
              <p className="font-light text-sm text-white">
                Contact: 08000098967{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-t py-5 border-white justify-between">
          <div className="flex gap-4 items-center mb-2">
            <p className="text-white text-base font-bold">Connect with us</p>
            <div className="flex gap-2 items-center">
              {xLogo} {instaLogo} {linkedInLogo}
            </div>
          </div>

          <p className="font-light text-sm text-white">
            Copyright ©afrimed. 2024. All right reserved
          </p>

          <a
            className="flex items-center gap-2 hover:cursor-pointer"
            href="#top"
          >
            <p className="font-light text-sm text-white">Back to Top</p>
            {backToTopIcon}
          </a>
        </div>
      </footer>
    </div>
  );
}
