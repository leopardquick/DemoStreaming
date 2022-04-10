import React, { useEffect, useState } from "react";
import { getData } from "../api/api-data";
import TitleBOx from "../assets/TitleBox";
import TitleCard from "../assets/TitleCard";


export default function Series(){
    const[item , setItem] = useState([]);
    const[load , setLoad] = useState(true)

    useEffect(()=>{
     
        getData().then(data=>{
            let filterData = data["entries"].filter(item=> item.programType == "series");
            setItem(filterData.slice(0,21))
            setLoad(false)
        })
    },[])

    return (
        <div>
        <TitleBOx name="Popular Series"/>
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