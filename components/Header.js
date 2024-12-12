// next image
import Image from "next/image";

// next link 
import Link from "next/link";

// components 
import Socials from "../components/Socials";

const Header = () => {
   const codeLogoEvert = "<"
   const codeLogoFermer = "/>"
  return <header className="absolute z-30 w-full max-h-[150px] flex items-center  px-16 xl:px-0 xl:h-[90px] md:mt-[10px]">
       <div className="container mx-auto">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4  py-8">
              {/* logo  */}
               <Link href={'/'}>
                  <div
                     width={220} height={48} 
                     priority={true} 
                     
                   >
                    <h1 ><span className="font-bold text-3xl font-sora tracking-widest">{codeLogoEvert}Sofyane-</span> 
                       <span className=" text-3xl font-extralight font-sora tracking-wider">Acoriy{codeLogoFermer}</span>
                    <span className="text-accent ml-[5px] font-bold text-md" >.</span></h1>
                   </div>
               </Link>
               {/* socials */}
               <Socials/>
           </div>
       </div> 
    </header>
};

export default Header;
