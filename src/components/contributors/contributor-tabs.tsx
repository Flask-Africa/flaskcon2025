interface Contributor {
  name: string;
  image: string;
  iconType:
    | "asterisk"
    | "arrows"
    | "star"
    | "semis"
    | "cross"
    | "diamonds"
    | "circles"
    | "circle";
  type: "panelist" | "speaker" | "judge" | "host" | "panel host" | "n/a";
  job: {
    position: string;
    coy?: string;
  };
  description: string;
}

export const ContributorTabs = () => {
  const contributorsData: Contributor[] = [
    {
      name: "Emmanuel Bakare",
      description:
        "Infrastructure and all things product and business. Focused on driving outcomes at Fortune 50s.",
      iconType: "asterisk",
      image: "",
      job: {
        position: "Senior Engineer",
        coy: "Twilio",
      },
      type: "judge",
    },
    {
      name: "Isaac Adewumi",
      description: "I’m just happy to be here :)",
      iconType: "arrows",
      image: "",
      job: {
        position: "Software Engineer",
        coy: "Rotki",
      },
      type: "panelist",
    },
    {
      name: "Kelechi Onyekwere",
      description:
        "Kelechi is a Software Engineer, and a Published  Independent Researcher with 7+ years of experience building quality products and solutions. Kelechi is an advocate for improving existing systems with emerging and experimental technologies. He is passionate about distributed systems, open source and financial solutions.",
      iconType: "star",
      image: "",
      job: {
        position: "Engineering Tech Lead",
        coy: "Fairmoney Microfinance Bank",
      },
      type: "speaker",
    },
    {
      name: "Cynthia Ibegbu",
      description:
        "Cynthia Ibegbu is a passionate software engineer with a strong focus on backend development. She’s also a dedicated community builder, serving as the Lead of PyLadies Abia and Co-lead of the Python Abia community. Cynthia is deeply committed to creating spaces where developers, especially women, can learn, grow, and build together. For her, technology is not just about writing code but about building communities that inspire collaboration and meaningful impact.",
      iconType: "semis",
      image: "",
      job: {
        position: "Software Engineer And Community Builder",
      },
      type: "panelist",
    },
    {
      name: "Renee Noble",
      description:
        "Renee Noble spends her time bringing together tech, teaching, and community in as many ways as possible. As a Cloud Developer Advocate on the Python Advocacy team at Microsoft, she spends her time teaching the community through global events, creating Python learning resources, and local workshops for students and professionals. Renee is also the CEO and Co-Founder or Tech Inclusion, best known for Girls’ Programming Network workshops that run around Australia. Well known for her work in tech education and the advancement of women, Renee was most recently awarded as Champion of Change 2025 by Women Leading Tech.",
      iconType: "cross",
      image: "",
      job: {
        position: "Senior Cloud Advocate",
        coy: "Microsoft",
      },
      type: "speaker",
    },
    {
      name: "Motunrayo Koyejo",
      description:
        "Infrastructure and all things product and business. Focused on driving outcomes at Fortune 50s.",
      iconType: "diamonds",
      image: "",
      job: {
        position: "Software Engineer",
        coy: "Cowrywise",
      },
      type: "panelist",
    },
    {
      name: "Victory Munachimso Nwokejiobi",
      description:
        "Victory Munachimso Nwokejiobi is a passionate Software Engineer and Backend Developer at Sapphire Credits, where she designs and builds scalable systems that power digital financial solutions. With a strong foundation in Node.js, NestJS, and cloud technologies, she focuses on creating reliable, high-performance backend architectures that drive business growth. Beyond code, Victory is deeply interested in innovation, strategy, and technology’s role in transforming Africa’s future. She believes in using software as a tool to solve real problems, empower people, and shape a more connected, efficient continent.",
      iconType: "circle",
      image: "",
      job: {
        position: "Backend Developer",
        coy: "Sapphire Credits",
      },
      type: "panelist",
    },
    {
      name: "Ifihanagbara Olusheye",
      description:
        "Ifihanagbara Olusheye is a Software and Machine Learning Engineer with a passion for building scalable solutions using cutting-edge technologies. Her expertise spans Backend Engineering, Artificial Intelligence, and Technical Writing, and she is proficient in Python. Her active involvement in open-source projects underscores her dedication to giving back and making meaningful contributions to the tech community. Beyond her technical abilities, Ifihanagbara is known for her deep love for the tech community and her consistent efforts to support and give back to the community she holds dear.",
      iconType: "circles",
      image: "",
      job: {
        position: "AI Engineer",
      },
      type: "speaker",
    },
    {
      name: "Victor Akande",
      description:
        "Meet Victor Akande, a cloud engineering and architecture specialist with a passion for building scalable, secure, and innovative solutions. He is also an International ICT Competition winner and holder of 15+ certifications from top cloud providers, Victor is dedicated to sharing knowledge and driving innovation in the developer community.",
      iconType: "asterisk",
      image: "",
      job: {
        position: "Infrastructure Engineer",
        coy: "Nihub",
      },
      type: "speaker",
    },
    {
      name: "Ubaydah Abdulwasiu",
      description:
        "Ubaydah Abdulwasiu is a Backend engineer with over three years of experience in designing and building scalable, high-performing APIs and backend systems in both startup and large tech environments. Proficient in Python frameworks like Django, Django Rest Framework, Flask, and Node.js with a strong focus on writing clean, efficient, and well-structured code. She also enjoys writing  Technical articles and documenting topics on programming languages, algorithms, and developer tooling.",
      iconType: "arrows",
      image: "",
      job: {
        position: "Software Engineer",
        coy: "UCD",
      },
      type: "panelist",
    },
    {
      name: "Izu Uchegbu",
      description:
        "Izu is a software engineer with over 5 years of experience, leveraging innovation to drive transformation in various roles across energy sales and regulation, advertising and in his current role, financial services.",
      iconType: "star",
      image: "",
      job: {
        position: "Senior Engineer",
        coy: "JP Morgan",
      },
      type: "speaker",
    },
    {
      name: "Oluwatobi Akintunlese",
      description:
        "Oluwatobi Akintunlese is a Senior Software Engineer with over five years of experience building scalable backend systems and cloud-native applications. He specializes in Golang and Python, with a strong focus on cloud infrastructure, data engineering, and backend architecture. Tobi currently works at Codematic, where he leads projects spanning fintech automation, data pipelines, and distributed systems. He’s passionate about developer communities, clean architecture, and mentoring engineers to build reliable, production-ready software. Beyond work, Tobi enjoys exploring AI-driven backend integrations and contributing to open tech discussions across Python and Go ecosystems.",
      iconType: "semis",
      image: "",
      job: {
        position: "Senior Software Engineer",
        coy: "Codematic",
      },
      type: "n/a",
    },
    {
      name: "Chukwuemeka Chukwurah",
      description:
        "Chukwuemeka is a software engineer with a strong focus on systems design, infrastructure, and developer tooling. With extensive experience in building large-scale systems, optimising low-level performance, and architecting resilient backend infrastructures, he thrives at the intersection of reliability, scalability, and engineering efficiency. Chukwuemeka is also a co-lead of GDG Cloud Lagos, where he facilitates discussions on cloud-native technologies, DevOps, and backend engineering.",
      iconType: "cross",
      image: "",
      job: {
        position: "Senior Software Engineer",
        coy: "Rocksteady Technology",
      },
      type: "panelist",
    },
    {
      name: "Seun Taiwo",
      description:
        "Seun is a frontend engineer. Seun loved building user interfaces. Seun got bored. Seun found systems design. Seun got interested. Seun studied systems design. Seun is now excited by systems design.",
      iconType: "diamonds",
      image: "",
      job: {
        position: "Frontend Engineer",
      },
      type: "n/a",
    },
    {
      name: "Solomon Esenyi",
      description:
        "Solomon Esenyi is a software engineer, and a specialist in the decentralized technology sector, where his core competencies lie in meticulous documentation engineering and sophisticated communication for Web3 infrastructure. He has honed his craft by shaping content strategy and writing comprehensive developer resources for high-profile global teams, including Nethermind, Status, and Unstoppable Domains. His unique profile is further enhanced by a robust education in Computer Software Engineering and Business Management, allowing him to approach technical communication with both engineering rigor and entrepreneurial insight.",
      iconType: "circle",
      image: "",
      job: {
        position: "Researcher and Developer",
      },
      type: "panelist",
    },
    {
      name: "Mark Irozuru",
      description: "Day to day computer plumber",
      iconType: "circles",
      image: "",
      job: {
        position: "Lead Devops Engineer",
        coy: "BotanixLabs",
      },
      type: "speaker",
    },
    {
      name: "Abdulhafeez Abdulraheem",
      description:
        "I am a software engineer with over eight years of experience, passionate about building solutions that solve real problems and provide genuine value. When I'm not coding, I enjoy the strategic depth of chess, the interactive stories of video games, and the creative expression of playing the piano.",
      iconType: "asterisk",
      image: "",
      job: {
        position: "CTO",
        coy: "Beeva AI",
      },
      type: "host",
    },
    {
      name: "Ajilore Daniel",
      description:
        "I am a 300-level Systems Engineering student at the University of Lagos and a Computer Vision Engineer Intern at Avzdax, where I build intelligent systems that merge AI with real-world applications. I’m passionate about backend development, web technologies, and applied machine learning, with hands-on experience creating and deploying Flask-based APIs and applications. Beyond Flask, I work with FastAPI, Django, and Next.js, and I actively mentor beginners in Python and backend development. My goal is to explore how Flask can serve as a bridge between control systems, AI, and the modern web.",
      iconType: "arrows",
      image: "",
      job: {
        position: "Computer Vision Engineer Intern",
        coy: "Avzdax",
      },
      type: "speaker",
    },
    {
      name: "Adaeze Chukwu",
      description:
        "Adaeze(Senpaiada) is the head of operations at spentrail and founder of senpaispmdojo. With a background spanning product, operations, and growth, she’s passionate about building efficient systems, scaling teams, and driving impactful strategies.",
      iconType: "star",
      image: "",
      job: {
        position: "Head of Operations",
        coy: "Spentrail",
      },
      type: "host",
    },
    {
      name: "Noah Useghan",
      description:
        "Noah Useghan is a software engineer with over four years of experience. He's also a graduate of guidance counselling and often calls himself a 'techie counsellor', bringing a unique viewpoint to technology. Noah is keen on understanding how tech affects people and teams. Fun fact: he enjoys cooking but finds it a bit too time consuming :(",
      iconType: "semis",
      image: "",
      job: {
        position: "Senior Engineer",
        coy: "Alerte Universal",
      },
      type: "panel host",
    },
    {
      name: "Ijeoma Onuaju",
      description:
        "Ijeoma Onuaju is a Software Engineer passionate about building seamless and engaging digital experiences. She transforms ideas into intuitive, user-centered solutions and enjoys fostering conversations that inspire growth, collaboration, and innovation in technology.",
      iconType: "cross",
      image: "",
      job: {
        position: "Senior Engineer",
        coy: "Trustscrin",
      },
      type: "panel host",
    },
    {
      name: "Babatunde Hammed",
      description:
        "Babatunde Hammed is the Global Head of Operations at Chimoney, where he leads global operations, compliance, and customer success initiatives powering cross-border payments and financial inclusion. A strong advocate for Open Payments, he works at the intersection of technology, finance, and accessibility, helping developers and businesses unlock seamless global transactions through open standards.",
      iconType: "diamonds",
      image: "",
      job: {
        position: "Head of Global Operations",
        coy: "Chimoney",
      },
      type: "speaker",
    },
  ];
  return <div>Who Gon std</div>;
};
