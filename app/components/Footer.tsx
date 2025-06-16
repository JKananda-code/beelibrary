import Link from "next/link";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-4 text-center">
     <ul className="flex justify-center space-x-4 bg-cyan-100 text-black p-4 text 2xl font-bold">    
      <li>
        <Link href="/contact"> Contact Us </Link>
      </li>
     </ul> 
     <div className="text-center">
      <SocialLinks />
</div> 
      <p>© 2025 BeeLibrary. All rights reserved.</p>
 </footer>
  );
};

export default Footer;
