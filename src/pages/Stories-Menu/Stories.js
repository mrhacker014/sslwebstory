import React from "react";
import Card from "../Components/Card";
import Cdata from "../Components/Cdata";

const Stories = () => {
     return (
          <>
               <div className="">
                    <div className="w-full py-3">
                         <h3 className="bg-red-600 p-2 font-bold text-xl tracking-wide text-white">STORIES</h3>
                    </div>
                    <div className="bg-[#f5f5f5] grid grid-cols-2 sm:grid-cols-4 sm:py-[78px]">
                         {
                              Cdata.map((val, ind) => {
                                   return <Card
                                        key={ind}
                                        visit={val.visit}
                                        img={val.img}
                                        name={val.name} />
                              })
                         }
                    </div>
               </div>

          </>
     );
}
export default Stories;