import {Link} from 'react-router-dom';
import { RiArrowDownWideLine } from "react-icons/ri";
import './Header.css';


function Header({sectionRef}) {

    const scrollToSection = () => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };


    
    return(
        <>
        
        <header className="flex  bg-transparent absolute top-[0px] left-[0px]  w-full">
            <h1 className="flex flex-start ml-17 mt-5 text-5xl">YallahFit</h1>
            <ul className="flex mt-10 ml-[650px] gap-5  ">
                 <Link className='Home hvr-underline-reveal ' to="/">Home</Link>
                 <button onClick={scrollToSection}><li className='Offers Home hvr-underline-reveal  pb-3'>Offers</li> </button>
                 <li className='about-us hvr-underline-reveal'>About us</li>
                 <button  className='contact hvr-underline-reveal pb-3'>Contact us</button>
           
        
            </ul>
            <Link to="/Auth" className="bg-[#E63946] text-white rounded-xl w-[120px] h-[40px]  ml-34 mt-9 flex items-center justify-center gap-2 icon-hang">Join us
            <RiArrowDownWideLine className="hvr-icon " />
            </Link>
            
         
        </header>
        
   

        </>
    );
}

export default Header;