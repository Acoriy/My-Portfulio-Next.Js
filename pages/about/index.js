import  {useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaGit,
  FaFigma,

} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiBootstrap,
  SiCanva,
  SiAdobephotoshop,
  SiPhp,
  SiMysql,
} from "react-icons/si";



//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
        <FaHtml5 key="html5"/>,  
        <FaCss3 key="css3"/>, 
        <FaJs key="js"/>,
        <FaReact key="react"/>, 
        <SiRedux key="redux"/>,
        <SiTailwindcss key="tailwind"/>,
        <SiBootstrap key="bootstrap"/>,
        <SiFramer key="framer"/>,
        // <FaWordpress key="wordpress" />
      ],
      },
      {
        title: "Back-end",
        icons: [<SiPhp key="php"/>,<SiMysql key="mysql"/>],
      },
      {
        title: "Outher",
        icons: [ <SiCanva key="canva"/>, <SiAdobephotoshop key="photoshop"/> , <FaFigma key="figma"/> , <FaGit key="git"/>],
      },
    ],
  },
  {
    title: "Formations ",
    info: [
      {
        title: "DTS Devloppment Informatique - Higher Institute of Applied Technology Technician specialized in computer development",
        stage: "Août 2020 - Juillet 2022",
      },
      {
        title: "A Year At Ibn Zohr University Agadir - Chemistry science branch First year.",
        stage: "Août 2019 - Avril 2020",
      },
      {
        title: "Baccalaureate - I had my baccalaureate in the Abdellah Chefchaouni high school.Physics and chemistry branch.",
        stage: "June 2019 session",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "website creator - Freelancer ",
        stage: "2024 - Currently",
      },
      {
        title: "Enquêteur RGPH 2024 - Haut Commissariat au Plan du Maroc",
        stage: "August 2024 – September 2024",
      },
      {
        title: "Email Marketing Specialist Full-time - ADSENTYA SARL in Ouled Teima",
        stage: "December 2023 – January 2024",
      },
      {
        title: "Machine Operator Full-time - LEONI WIRING SYSTEMS in Berchid ",
        stage: "March 2023 – July 2023",
      },
      {
        title: "developing the desktop application for excavation management propection  - RMA - Royale Marocaine d\"Assurance",
        stage: "Apr 2022 - May 2022",
      },  
    ],
  },
  {
    title: "Certificates",
    info: [
      {
        title: "Certificate of achievement UX/UI Design Bootcamp",
        stage: "2024",
        link:"https://drive.google.com/file/d/1sJ3pTrO791S4b5FCx3qeIx4JKHKy_xic/view?usp=sharing"
      },
      {
        title: "Digital Marketing training",
        stage: "2024",
        link:"https://drive.google.com/file/d/1ed0W2tvhioeO-RaTpq-tQqIH5TeHJxHp/view?usp=sharing"
      },
      {
        title: "Attestation Participation RGPH 2024 - Haut Commissariat au Plan du Maroc",
        stage: "2024",
        link:"https://drive.google.com/file/d/1clh7o2599EKX8-R_GhmG0MGcP8O71NJX/view?usp=sharing"
      },
      {
         title: "Attestation Formation Adistances RGPH 2024 - Haut Commissariat au Plan du Maroc",
        stage: "2024",
        link:"https://drive.google.com/file/d/12rhFc03zUTLbcng-8uokd6x46xDNapIT/view?usp=sharing"
      },
      {
        title: "Utilisez HTML5 pour l\"interface utilisateur - OpenClassrooms",
        stage: "2023",
        link:"https://drive.google.com/file/d/12DpPn3qRrkTBlcxtZeHyZ9uQ8kJR3nbo/view?usp=sharing"
      },
      {
        title: "Requêtez une base de données avec SQL - OpenClassrooms",
        stage: "2023",
        link:"https://drive.google.com/file/d/1z5ULsM0EiWjhYOEte-3vEsi-RKlbaKxV/view?usp=sharing"
      },
      {
        title: "Concevez votre site web avec PHP et MySQL - OpenClassrooms",
        stage: "2024",
        link:"https://drive.google.com/file/d/1AH0slKGgyFfIL29bivBbOBs89IiTExgN/view?usp=sharing"
      },
      {
        title: "Apprenez à programmer en C - OpenClassrooms",
        stage: "2023",
        link:"https://drive.google.com/file/d/1tqfAJ4FoRnamMosBmNuyd7CIrUXd7osr/view?usp=share_link"
      },
      {
        title: "Learn HTML & CSS - MaharaTech  ",
        stage: "2022",
        link:"https://drive.google.com/file/d/1FKWaBszsFVYIGT80Czaq2ZI27Td4wT4j/view?usp=sharing"
      },
      {
        title: " Microsoft Excel (Office 2016) - Microsoft",
        stage: "2021",
        link:"https://drive.google.com/file/d/1H1K0F2nhUyCA5Yote-z-mCWinhWgd28W/view?usp=sharing"
      },
    ],
  },
];

// components 
// import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion 
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";

// counter 
import CountUp from "react-countup";


const About = () => {
  const [index , setIndex] = useState(0);
  // console.log(index);
  
   //  text
  const sentence = " I\'m Frontend  developer .";
  const letters = Array.from(sentence);


  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles/>
    {/* avatar img */}
    
    {/* <motion.div  */}
      {/* variants={fadeIn("right" , 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[320px]"> */}
       {/* <Avatar/> */}
    {/* </motion.div> */}
    <div className="container mx-auto  "> 
      
      <div className="h-full flex flex-col items-center  justify-center my-auto
        xl:flex-row gap-x-6 ">
           {/* text */}
           <div className="flex-1 flex flex-col justify-center">
              {/* <motion.h2 
               variants={fadeIn("right" , 0.2)}
               initial="hidden"
               animate="show"
               exit="hidden"
               className="h2 xl:z-10">
                {/* Captivating <span className="text-accent">stories</span> birth magnificent designs.  */}
                {/* Hello World ! I'm <span className="text-accent">Frontend </span> developer .  */}
              {/* </motion.h2> */}
              {/* pour testing ----------------------  */}
              <motion.h2
                  initial="hidden"
                  animate="visible"
                  variants={{
                      hidden: { opacity: 1 },
                      visible: {
                          opacity: 1,
                          transition: {
                              staggerChildren: 0.2,
                          },
                      },
                  }}
                  className="h2 xl:z-10"
              >
                <span className="text-accent">Hi ! </span> 
                  {letters.map((char, itemIndexText) => (
                      <motion.span key={itemIndexText}
                          variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                          }}
                      >
                          {char}
                      </motion.span>
                  ))}
              </motion.h2>
              <motion.p 
                variants={fadeIn("right" , 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:z-10">
                Passionate about creating intuitive and thoughtful user experiences, I specialize in front-end development using modern technologies. With an eye for design and attention to detail, 
                I transform concepts into dynamic and interactive interfaces. Always keeping in mind the latest trends and innovations, I am committed to providing high-quality web solutions that meet my clients needs.
              </motion.p>
              {/* counters  */} 
              <motion.div 
                 variants={fadeIn("right" , 0.6)}
                 initial="hidden"
                 animate="show"
                 exit="hidden"
                 className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 ">
                <div className="flex flex-1 xl:gap-x-6">
                  {/* experiences */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                        <CountUp start={0} end={1} duration={5}/> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Years of experience
                      </div>
                  </div>
                  {/* clients */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                        <CountUp start={0} end={5} duration={5}/> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Satisfied clients 
                      </div>
                  </div>
                  {/* project */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                        <CountUp start={0} end={10} duration={5}/> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Finishid projects 
                      </div>
                  </div>
                  {/* awards جوائز */}
                  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                        <CountUp start={0} end={1} duration={5}/> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                        Winning awards
                      </div>
                  </div>
                </div>
              </motion.div>
          </div>
          {/* info */}
          <motion.div
             variants={fadeIn("left" , 0.4)}
             initial="hidden"
             animate="show"
             exit="hidden" 
             className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-y-auto">
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {aboutData.map((item , itemIndexInfo)=>{
                  return (<div key={itemIndexInfo}
                      className={`${
                        index === itemIndexInfo && 
                        "text-accent after:w-[100%] after:bg-accent  after:transition-all after:duration-300"
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndexInfo)} >
                        {item.title}
                    </div>
                    );
                  
                })}
              </div>
              <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                {aboutData[index].info.map((item , itemIndexText2)=>{
                    return(
                      <div key={itemIndexText2} className="flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 ">
                        {/* title */}
                        <div className="font-light mb-2 md:mb-0 hover:text-white hover:font-semibold hover:text-lg transition-colors duration-300 cursor-pointer">
                          <a href={item.link} target="_blank">{item.title}</a>
                        </div>
                        <div className="hidden md:flex">-</div>
                        <div>{item.stage}</div>
                        <div className="flex gap-x-4">
                          {/* icons */}
                            {item.icons?.map((icon , itemIndexText2) =>{
                              return <div key={itemIndexText2} className="text-2xl text-white">{icon}</div>
                            } )}
                        </div>
                        
                      </div>
                    );
                })}
              </div>
          </motion.div>
      </div>

    </div>
  </div>
};

export default About;
