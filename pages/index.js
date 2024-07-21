// next image
import image from 'next/image'

// components 
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../variants'

const Home = () => {
    //  text
  const sentence = " Hi! I'm Sofyane a Frontend Developer 👨‍💻 based in Morocco.";
  const letters = Array.from(sentence);
  
  return <div className='bg-primary/60 h-full flex justify-center items-center'>

         {/* texte */}
         <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
            <div className='text-center flex flex-col justify-center  xl:pt-[40px]  xl:text-left  h-full container mx-auto '>
              {/* titre */}
              <motion.h1 variants={fadeIn('down' , 0.2 )} initial="hidden" animate ="show" exit="hidden"
                 className='h1'>
                 Transforming Ideas <br/> Into{' '}
                 <span className='text-accent'>Digital Reality</span>
              </motion.h1>
              {/* subtitle */}
              <motion.p  
                  // variants={fadeIn('down' , 0.3)} 
                  // initial="hidden" 
                  // animate ="show" 
                  // exit="hidden"
                  initial="hidden"
                  animate="visible"
                  variants={{
                      hidden: { opacity: 1 },
                      visible: {
                          opacity: 1,
                          transition: {
                              staggerChildren: 0.1,
                          },
                      },
                  }}
                 className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm font-normal tracking-[1px]'>
                {/* Hi! I'm Sofyane a Frontend Developer 👨‍💻 based in Morocco. */}
                {letters.map((char, index) => (
                      <motion.span
                          key={index}
                          variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                          }}
                      >
                    
                          {char}
                      </motion.span>
                  ))}
              </motion.p>
              {/* btn  */}
              <div className='flex justify-center xl:hidden relative z-10'>
                 <ProjectsBtn/>
              </div>

              <motion.div 
                  variants={fadeIn('down' , 0.4 )} 
                  initial="hidden" 
                  animate ="show" 
                  exit="hidden"
                className='hidden xl:flex xl:z-10' 
              >
                 <ProjectsBtn/>
              </motion.div>
            </div>
         </div>
         {/* image */}
         <div className='w-[1200px] h-full absolute right-0 bottom-0'>
            {/* bg image */}
            <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>  
            </div>
            {/* particles */}
            <ParticlesContainer/>
            {/* avatar img */}
            <motion.div  
              variants={fadeIn('up' , 0.5 )} 
              initial="hidden" animate ="show" exit="hidden" 
              transition={{ duration: 1 , ease :'easeInOut'}}
              className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
               <Avatar/>
            </motion.div>
         </div>
      </div>
      
};

export default Home;
