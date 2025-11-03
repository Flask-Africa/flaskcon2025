import Image, { StaticImageData } from "next/image";
import contributorBg from "@/assets/images/contributor-bg.png";
import bakare from "@/assets/images/contributors/bakare.png";
import adewumi from "@/assets/images/contributors/adewumi.png";
import onyekwere from "@/assets/images/contributors/onyekwere.png";
import ibegbu from "@/assets/images/contributors/ibegbu.png";
import noble from "@/assets/images/contributors/noble.png";
import koyejo from "@/assets/images/contributors/koyejo.png";
import nwokejiobi from "@/assets/images/contributors/nwokejiobi.png";
import olusheye from "@/assets/images/contributors/olusheye.png";
import akande from "@/assets/images/contributors/akande.png";
import abdulwasiu from "@/assets/images/contributors/abdulwasiu.png";
import uchegbu from "@/assets/images/contributors/uchegbu.png";
import akintunlese from "@/assets/images/contributors/akintunlese.png";
import chukwurah from "@/assets/images/contributors/chukwurah.png";
import taiwo from "@/assets/images/contributors/taiwo.png";
import esenyi from "@/assets/images/contributors/esenyi.png";
import irozuru from "@/assets/images/contributors/irozuru.png";
import abdulraheem from "@/assets/images/contributors/abdulraheem.png";
import daniel from "@/assets/images/contributors/daniel.png";
import chukwu from "@/assets/images/contributors/chukwu.png";
import useghan from "@/assets/images/contributors/useghan.png";
import onuaju from "@/assets/images/contributors/onuaju.png";
import hammed from "@/assets/images/contributors/hammed.png";

import asterisk from "@/assets/svg/asterisk.svg";
import arrows from "@/assets/svg/arrows.svg";
import star from "@/assets/svg/star.svg";
import semis from "@/assets/svg/semis.svg";
import cross from "@/assets/svg/cross.svg";
import diamonds from "@/assets/svg/diamonds.svg";
import circle from "@/assets/svg/circle.svg";
import circles from "@/assets/svg/circles.svg";

export interface Contributor {
  name: string;
  description: string;
  iconSrc: StaticImageData;
  image: StaticImageData;
  job: {
    position: string;
    coy?: string;
  };
  type: string;
}

export const ContributorTabs = () => {
  const contributorsData: Contributor[] = [
    {
      name: "Emmanuel Bakare",
      description:
        "Infrastructure and all things product and business. Focused on driving outcomes at Fortune 50s.",
      iconSrc: asterisk,
      image: bakare,
      job: { position: "Senior Engineer", coy: "Twilio" },
      type: "judge",
    },
    {
      name: "Isaac Adewumi",
      description: "I’m just happy to be here :)",
      iconSrc: arrows,
      image: adewumi,
      job: { position: "Software Engineer", coy: "Rotki" },
      type: "panelist",
    },
    {
      name: "Kelechi Onyekwere",
      description:
        "Kelechi is a Software Engineer, and a Published Independent Researcher with 7+ years of experience building quality products and solutions. Kelechi is an advocate for improving existing systems with emerging and experimental technologies. He is passionate about distributed systems, open source and financial solutions.",
      iconSrc: star,
      image: onyekwere,
      job: {
        position: "Engineering Tech Lead",
        coy: "Fairmoney Microfinance Bank",
      },
      type: "speaker",
    },
    {
      name: "Cynthia Ibegbu",
      description:
        "Cynthia Ibegbu is a passionate software engineer with a strong focus on backend development. She’s also a dedicated community builder, serving as the Lead of PyLadies Abia and Co-lead of the Python Abia community. Cynthia is deeply committed to creating spaces where developers, especially women, can learn, grow, and build together.",
      iconSrc: semis,
      image: ibegbu,
      job: { position: "Software Engineer And Community Builder" },
      type: "panelist",
    },
    {
      name: "Renee Noble",
      description:
        "Renee Noble spends her time bringing together tech, teaching, and community in as many ways as possible. As a Cloud Developer Advocate on the Python Advocacy team at Microsoft, she spends her time teaching the community through global events, creating Python learning resources, and local workshops for students and professionals.",
      iconSrc: cross,
      image: noble,
      job: { position: "Senior Cloud Advocate", coy: "Microsoft" },
      type: "speaker",
    },
    {
      name: "Motunrayo Koyejo",
      description:
        "Infrastructure and all things product and business. Focused on driving outcomes at Fortune 50s.",
      iconSrc: diamonds,
      image: koyejo,
      job: { position: "Software Engineer", coy: "Cowrywise" },
      type: "panelist",
    },
    {
      name: "Victory Munachimso Nwokejiobi",
      description:
        "Victory Munachimso Nwokejiobi is a passionate Software Engineer and Backend Developer at Sapphire Credits, where she designs and builds scalable systems that power digital financial solutions.",
      iconSrc: circle,
      image: nwokejiobi,
      job: { position: "Backend Developer", coy: "Sapphire Credits" },
      type: "panelist",
    },
    {
      name: "Ifihanagbara Olusheye",
      description:
        "Ifihanagbara Olusheye is a Software and Machine Learning Engineer with a passion for building scalable solutions using cutting-edge technologies.",
      iconSrc: circles,
      image: olusheye,
      job: { position: "AI Engineer" },
      type: "speaker",
    },
    {
      name: "Victor Akande",
      description:
        "Meet Victor Akande, a cloud engineering and architecture specialist with a passion for building scalable, secure, and innovative solutions.",
      iconSrc: asterisk,
      image: akande,
      job: { position: "Infrastructure Engineer", coy: "Nihub" },
      type: "speaker",
    },
    {
      name: "Ubaydah Abdulwasiu",
      description:
        "Ubaydah Abdulwasiu is a Backend engineer with over three years of experience in designing and building scalable, high-performing APIs and backend systems.",
      iconSrc: arrows,
      image: abdulwasiu,
      job: { position: "Software Engineer", coy: "UCD" },
      type: "panelist",
    },
    {
      name: "Izu Uchegbu",
      description:
        "Izu is a software engineer with over 5 years of experience, leveraging innovation to drive transformation in financial services.",
      iconSrc: star,
      image: uchegbu,
      job: { position: "Senior Engineer", coy: "JP Morgan" },
      type: "speaker",
    },
    {
      name: "Oluwatobi Akintunlese",
      description:
        "Oluwatobi Akintunlese is a Senior Software Engineer with over five years of experience building scalable backend systems and cloud-native applications.",
      iconSrc: semis,
      image: akintunlese,
      job: { position: "Senior Software Engineer", coy: "Codematic" },
      type: "n/a",
    },
    {
      name: "Chukwuemeka Chukwurah",
      description:
        "Chukwuemeka is a software engineer with a strong focus on systems design, infrastructure, and developer tooling.",
      iconSrc: cross,
      image: chukwurah,
      job: {
        position: "Senior Software Engineer",
        coy: "Rocksteady Technology",
      },
      type: "panelist",
    },
    {
      name: "Seun Taiwo",
      description:
        "Seun is a frontend engineer turned systems design enthusiast.",
      iconSrc: diamonds,
      image: taiwo,
      job: { position: "Frontend Engineer" },
      type: "n/a",
    },
    {
      name: "Solomon Esenyi",
      description:
        "Solomon Esenyi is a software engineer and a specialist in the decentralized technology sector, with expertise in documentation engineering.",
      iconSrc: circle,
      image: esenyi,
      job: { position: "Researcher and Developer" },
      type: "panelist",
    },
    {
      name: "Mark Irozuru",
      description: "Day to day computer plumber",
      iconSrc: circles,
      image: irozuru,
      job: { position: "Lead Devops Engineer", coy: "BotanixLabs" },
      type: "speaker",
    },
    {
      name: "Abdulhafeez Abdulraheem",
      description:
        "Software engineer with 8+ years experience, passionate about solving real problems and building solutions that provide genuine value.",
      iconSrc: asterisk,
      image: abdulraheem,
      job: { position: "CTO", coy: "Beeva AI" },
      type: "host",
    },
    {
      name: "Ajilore Daniel",
      description:
        "300-level Systems Engineering student and Computer Vision Engineer Intern at Avzdax, building intelligent AI systems.",
      iconSrc: arrows,
      image: daniel,
      job: { position: "Computer Vision Engineer Intern", coy: "Avzdax" },
      type: "speaker",
    },
    {
      name: "Adaeze Chukwu",
      description:
        "Head of Operations at Spentrail and founder of SenpaiSPMDojo, passionate about scaling teams and building efficient systems.",
      iconSrc: star,
      image: chukwu,
      job: { position: "Head of Operations", coy: "Spentrail" },
      type: "host",
    },
    {
      name: "Noah Useghan",
      description:
        "Software engineer with over four years of experience and a background in guidance counselling — the 'techie counsellor'.",
      iconSrc: semis,
      image: useghan,
      job: { position: "Senior Engineer", coy: "Alerte Universal" },
      type: "panel host",
    },
    {
      name: "Ijeoma Onuaju",
      description:
        "Software Engineer passionate about building seamless and engaging digital experiences.",
      iconSrc: cross,
      image: onuaju,
      job: { position: "Senior Engineer", coy: "Trustscrin" },
      type: "panel host",
    },
    {
      name: "Babatunde Hammed",
      description:
        "Global Head of Operations at Chimoney, leading global operations, compliance, and customer success initiatives powering cross-border payments.",
      iconSrc: diamonds,
      image: hammed,
      job: { position: "Head of Global Operations", coy: "Chimoney" },
      type: "speaker",
    },
  ];
  return (
    <section className="w-full border-t-2 border-black h-[150vh]">
      <div className="md:px-2 lg:px-4 xl:px-16 max-w-[1440px] h-full mx-auto">
        <div className="md:border-x-2 md:flex h-full w-full flex items-center justify-start gap-0">
          <div className="w-[10%] h-full overflow-auto border-r-2 border-black">
            {contributorsData.map((contributor, index) => (
              <div
                key={`contributor-${index}`}
                className="h-[200px] w-full flex flex-col items-center justify-start"
              >
                <div className="w-full h-[70%] flex justify-center items-end">
                  <Image
                    src={contributor.image}
                    alt=""
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="flex items-center justify-center bg-black w-full h-[30%]">
                  <Image src={contributor.iconSrc} alt="" className="" />
                </div>
              </div>
            ))}
          </div>
          <div className="w-[44%] h-full border-r-2 border-black">
            <Image
              src={contributorBg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[46%] h-full">
            <div className="w-full h-[44%] border-b-2 border-black"></div>
            <div className="w-full h-[12%] border-b-2 border-black"></div>
            <div className="w-full h-[44%] bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
