import Header from "../../Components/Header/Header";
import Section1 from "../../Components/Section1/Section1";
import Section0 from "../../Components/Section0/Section0";
import React, { useRef } from 'react';

import Contact from "../Contact/Contact";







function Home(){
    const sectionRef = useRef(null);
    return(
        <>

        <Section0 sectionRef={sectionRef}/>
        <Section1 sectionRef={sectionRef} />
        
        

 
        

        </>
    )
}

export default Home;