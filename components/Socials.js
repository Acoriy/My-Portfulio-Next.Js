// links
import Link from "next/link";

// icons
import {RiWhatsappLine , RiInstagramLine , RiLinkedinLine , RiGithubLine , RiDiscordLine ,RiBehanceLine , RiDribbbleLine } from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center justify-center gap-x-5 text-lg xl:mx-[40px]">
    {/* <Link href={'/https://www.facebook.com/soufyan.akouri.2014?locale=fr_FR'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
     </Link> */}
    <Link href={'https://instagram.com/sofyane_acoriy'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link>
     <Link href={'https://wa.me/212689995840'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link>
     <Link  href={'https://linkedin.com/in/sofyane-acoriy-788b97235'} target="_blank" className="hover:text-accent transition-all duration-300">
       <RiLinkedinLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link>
     <Link href={'https://github.com/Acoriy'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link>
     {/* <Link href={'https://discord.com/invite/4xGGnCHw'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiDiscordLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link> */}
     <Link href={'https://www.behance.net/acoriysofyane'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiBehanceLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link>
     <Link href={'https://dribbble.com/SofyaneAcoriy10'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine className="2xl:w-[30px] 2xl:h-[60px]"/>
     </Link>
    
  </div>
};

export default Socials;
