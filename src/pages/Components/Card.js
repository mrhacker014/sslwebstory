import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
     return (
          <>

               <div className="m-3">
                    <Link to={props.visit}>
                         <img src={props.img}
                              alt={props.name}
                              className="h-72 w-56 m-auto cursor-pointer rounded-lg hover:scale-110 duration-300 ease-in-out drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]" />
                    </Link>

               </div>
          </>
     );
}

export default Card;
