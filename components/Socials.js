// links
import Link from "next/link";

// icons
import {RiWhatsappLine , RiInstagramLine , RiLinkedinLine , RiGithubLine , RiDiscordLine } from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center justify-center gap-x-5 text-lg xl:mx-[40px]">
    {/* <Link href={'/https://www.facebook.com/soufyan.akouri.2014?locale=fr_FR'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
     </Link> */}
    <Link href={'https://instagram.com/sofyane_acoriy'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
     </Link>
     <Link href={'https://wa.me/212689995840'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine/>
     </Link>
     <Link  href={'https://linkedin.com/in/sofyane-acoriy-788b97235'} target="_blank" className="hover:text-accent transition-all duration-300">
       <RiLinkedinLine/>
     </Link>
     <Link href={'https://github.com/Acoriy'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
     </Link>
     <Link href={'https://discord.com/invite/4xGGnCHw'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiDiscordLine/>
     </Link>
    
  </div>
};

export default Socials;
