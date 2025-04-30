
import {Link , useParams, useLocation }  from 'react-router-dom'
import Workouts from '../Workouts/Workouts';
import MealTracking from '../MealTracking/MealTracking';
import Yoga from '../Yoga/Yoga';
import { useEffect, useState } from "react";
import axios from "axios";

function Details(){
    let id = useParams()?.id;
    const location = useLocation();
    

const [Details, setDetails] = useState([]);

      useEffect(()=> {
        console.log('idddd',id);
        axios.get(`http://localhost:5000/api/offers/${id}`)
        .then((res) => {
          setDetails(res?.data);
          console.log("Fetched offers:", res?.data);
        })
        .catch((err) => {
          console.error("Error fetching offers:", err);
        });

      },[])
console.log('Detailssss',Details);


    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");


    switch (type) {
        case "workout":
          return <Workouts id={id} />;
        case "mealtracking":
          return <MealTracking id={id} />;
        case "yoga":
          return <Yoga id={id} />;
       
      }

      
    
    return(
        <>
    
       <header className="flex   bg-black absolute top-[0px] left-[0px]  w-full">
            <h1 className="flex flex-start ml-20 mt-5 text-5xl text-white">Logo</h1>
            <ul className="flex mt-10 ml-[700px] gap-5  ">
                 <Link className='Home hvr-underline-reveal ' to="/">Home</Link>
                 <button><li className='Offers Home hvr-underline-reveal  pb-3'>Offers</li>
                 </button>

             
        
            </ul>
         
        </header>

        <h1>fggfg</h1>
        <h1>fggfg</h1>
        <h1>fggfg</h1>
        <h1>fggfg</h1>
        <h1>fggfg</h1>
        <h1>{Details.title}</h1>

        
        







        </>
    )
}

export default Details;