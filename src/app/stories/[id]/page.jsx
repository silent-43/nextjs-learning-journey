import React from "react";
import StoryDetailsCard from "./StoryDetailsCard";

const page = async ({ params }) => {
  const { id } = await params;

  const devStories = [
    {
      id: 1,
      name: "Arman Hossain",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "3 years",
      skills: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
      story:
        "Arman started learning web development during his university days. He struggled with JavaScript at first but improved through consistent practice and real-world projects.",
      about:
        "Arman is a passionate frontend developer from Bangladesh who loves building beautiful, responsive, and user-friendly web applications.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      designation: "Full Stack Developer",
      company: "BrightByte Labs",
      experience: "4 years",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      story:
        "Sara began her programming journey by creating small websites. She gradually learned backend development and built several full-stack applications.",
      about:
        "Sara is a creative full stack developer who enjoys solving complex problems and developing scalable web applications.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rahim Uddin",
      designation: "Backend Developer",
      company: "CloudPeak Technologies",
      experience: "5 years",
      skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
      story:
        "Rahim discovered his interest in backend development while working on a university project. He focused on databases, APIs, and server-side architecture.",
      about:
        "Rahim is a backend developer who specializes in building secure APIs and reliable server-side systems.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      designation: "UI/UX Designer",
      company: "PixelCraft Studio",
      experience: "2 years",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
      story:
        "Nusrat developed an interest in digital design after creating posters and illustrations. She later learned user research and interface design.",
      about:
        "Nusrat is a UI/UX designer who creates intuitive digital experiences with a strong focus on usability and visual consistency.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Tanvir Hasan",
      designation: "React Developer",
      company: "NextGen Digital",
      experience: "3 years",
      skills: ["React", "JavaScript", "React Router", "Redux"],
      story:
        "Tanvir started with basic HTML and CSS before discovering React. He practiced component-based development by building dashboards and interactive websites.",
      about:
        "Tanvir is a React developer who enjoys building reusable components and fast, interactive user interfaces.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 6,
      name: "Ayesha Rahman",
      designation: "Next.js Developer",
      company: "WebOrbit Studio",
      experience: "2 years",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      story:
        "Ayesha started developing React applications and later explored Next.js to improve routing, rendering, and application performance.",
      about:
        "Ayesha is a frontend engineer passionate about modern web technologies, performance optimization, and accessible interfaces.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      id: 7,
      name: "Sabbir Ahmed",
      designation: "Software Engineer",
      company: "CodeBridge Technologies",
      experience: "6 years",
      skills: ["JavaScript", "Python", "Git", "Problem Solving"],
      story:
        "Sabbir developed his programming skills by solving coding challenges and contributing to collaborative projects. He gradually moved into professional software development.",
      about:
        "Sabbir is a software engineer who enjoys writing maintainable code and helping teams deliver dependable software.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: 8,
      name: "Maliha Chowdhury",
      designation: "Frontend Engineer",
      company: "BlueSky Innovations",
      experience: "4 years",
      skills: ["React", "TypeScript", "CSS", "Accessibility"],
      story:
        "Maliha began her journey by redesigning existing websites for practice. Her interest in accessibility and responsive design helped her develop a strong frontend foundation.",
      about:
        "Maliha is a frontend engineer who focuses on accessible, responsive, and visually polished digital products.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 9,
      name: "Fahim Mahmud",
      designation: "MERN Stack Developer",
      company: "DevSphere Limited",
      experience: "3 years",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
      story:
        "Fahim learned the MERN stack by building a task management application. He continued improving his skills through authentication, API integration, and database projects.",
      about:
        "Fahim is a MERN stack developer who builds full-stack applications with practical features and clean architecture.",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      id: 10,
      name: "Samira Islam",
      designation: "Web Developer",
      company: "DigitalNest Agency",
      experience: "1 year",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      story:
        "Samira started learning web development through online tutorials. She built several practice websites and gradually developed confidence in frontend programming.",
      about:
        "Samira is an enthusiastic web developer who enjoys learning new technologies and turning design ideas into functional websites.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 11,
      name: "Mehedi Hasan",
      designation: "DevOps Engineer",
      company: "CloudMatrix",
      experience: "5 years",
      skills: ["Docker", "Linux", "GitHub Actions", "AWS"],
      story:
        "Mehedi became interested in automation while deploying his first web application. He later explored cloud infrastructure and continuous integration workflows.",
      about:
        "Mehedi is a DevOps engineer focused on deployment automation, infrastructure reliability, and efficient development workflows.",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 12,
      name: "Tania Sultana",
      designation: "Mobile App Developer",
      company: "AppWave Technologies",
      experience: "3 years",
      skills: ["React Native", "JavaScript", "Firebase", "REST API"],
      story:
        "Tania became interested in mobile applications after developing websites. She started exploring React Native to build applications for Android and iOS.",
      about:
        "Tania is a mobile developer who enjoys creating useful applications with smooth navigation and intuitive interfaces.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 13,
      name: "Imran Kabir",
      designation: "Database Engineer",
      company: "DataCore Systems",
      experience: "7 years",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design"],
      story:
        "Imran developed an interest in databases while managing application data for a university project. He later focused on data modeling, query optimization, and database reliability.",
      about:
        "Imran is a database engineer who specializes in efficient data storage, database performance, and reliable data management.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 14,
      name: "Farzana Akter",
      designation: "QA Engineer",
      company: "QualityFirst Software",
      experience: "3 years",
      skills: ["Manual Testing", "Postman", "Selenium", "Bug Tracking"],
      story:
        "Farzana discovered software testing while helping a team validate a web application. She learned to design test cases, identify defects, and improve product quality.",
      about:
        "Farzana is a QA engineer who values attention to detail and works to ensure applications behave as expected.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 15,
      name: "Rakibul Islam",
      designation: "Junior Web Developer",
      company: "FutureStack Technologies",
      experience: "1 year",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      story:
        "Rakibul started coding as a personal hobby and built a portfolio to showcase his projects. He continues learning modern frontend practices through hands-on development.",
      about:
        "Rakibul is a junior web developer eager to build practical projects, strengthen his technical foundation, and collaborate with experienced developers.",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 16,
      name: "Nabila Karim",
      designation: "Python Developer",
      company: "LogicLoop Software",
      experience: "4 years",
      skills: ["Python", "Django", "PostgreSQL", "REST API"],
      story:
        "Nabila began programming with Python because of its readable syntax. She later learned Django and built applications that manage data and automate routine tasks.",
      about:
        "Nabila is a Python developer interested in backend engineering, automation, and dependable web services.",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      id: 17,
      name: "Shakib Rahman",
      designation: "Cloud Engineer",
      company: "SkyRoute Technologies",
      experience: "4 years",
      skills: ["AWS", "Docker", "Linux", "Networking"],
      story:
        "Shakib became interested in cloud computing while learning how web applications are deployed. He gradually explored cloud services, containers, and infrastructure monitoring.",
      about:
        "Shakib is a cloud engineer who enjoys building scalable infrastructure and improving application availability.",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      id: 18,
      name: "Priya Das",
      designation: "Product Designer",
      company: "CreativeGrid",
      experience: "3 years",
      skills: ["Figma", "UI Design", "UX Research", "Design Systems"],
      story:
        "Priya started exploring digital product design after studying visual communication. She learned to turn user feedback into clear design decisions and consistent interfaces.",
      about:
        "Priya is a product designer who combines creative thinking with user research to create meaningful digital experiences.",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      id: 19,
      name: "Anik Roy",
      designation: "API Developer",
      company: "Connectify Labs",
      experience: "2 years",
      skills: ["Node.js", "Express.js", "JWT", "Postman"],
      story:
        "Anik started creating APIs for personal projects and learned how authentication, validation, and error handling make applications more reliable.",
      about:
        "Anik is an API developer who focuses on secure endpoints, clear documentation, and reliable communication between applications.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 20,
      name: "Jannatul Ferdous",
      designation: "Full Stack Engineer",
      company: "InnovateX Solutions",
      experience: "5 years",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
      story:
        "Jannatul started with frontend development and gradually learned server-side programming and database management. She now enjoys building complete products from concept to deployment.",
      about:
        "Jannatul is a full stack engineer passionate about solving real-world problems through thoughtful design and robust software architecture.",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];
  const singleStory = devStories.find((story) => story.id == id);
  if (!singleStory) {
    return <h2>Story Not Found</h2>;
  }

  return <StoryDetailsCard story={singleStory}></StoryDetailsCard>;
};

export default page;
