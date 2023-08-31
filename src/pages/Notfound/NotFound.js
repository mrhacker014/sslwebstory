import {useNavigate } from "react-router-dom";

const NotFound = () =>{
     const navigate = useNavigate();
     return(
          <>
               <div className="bg-[#f5f5f5] py-52 grid grid-cols-1">
                    <h1 className="text-4xl font-bold text-center mb-8">404 ERROR</h1>
                    <button onClick={()=>navigate("/")} className="bg-blue-600 m-auto p-3 rounded-3xl text-white font-semibold">Go To Home Page</button>
               </div>    
          </>
     );
}
export default NotFound;