import React, { useEffect, useState } from "react";
import { getData } from "../api/api-data";
import TitleBOx from "../assets/TitleBox";
import TitleCard from "../assets/TitleCard";




export default function Movie(props){

    const[item , setItem] = useState([]);
    const[load , setLoad] = useState(true)

    useEffect(()=>{
     
        getData().then(data=>{
            let filterData = data["entries"].filter(item=> item.programType == "movie");
            setItem(filterData.slice(0,21))
            setLoad(false)
        })
    },[])

    return (
        <div>
           <TitleBOx name="Popular Movies"/>
           <div className="boxContainer">
               { load ? "loadiang " : item.map( (data,i) => {
                   return (
                       <TitleCard key={i} data={data}/>
                   )
               }) }
           </div>
        </div>
    )


}