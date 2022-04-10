import React from "react";

export default function TitleCard(props){
    let content = props.data
    return(
            <div className="box">
                <div className="card">
                    <img width={100} height={300} src={content.images["Poster Art"].url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                         <h5 className="card-title">{content.title}</h5>
                         <h6 className="card-subtitle mb-2 text-muted">{content.releaseYear}</h6>
                        <p className="card-text">{content.description}</p>
                     </div>
                </div>
            </div>
    
    )
}