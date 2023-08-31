import React from "react";
const Home=()=>{
     return(
          <>
               <div className="grid grid-col justify-center items-center bg-[#f5f5f5]">
                    <header className="text-center my-10">
                         <h1 className="text-4xl font-bold text-[#333] mb-2.5">
                         Welcome to our Storysite.
                         </h1>
                         <p className="text-lg text-[#666] mb-5">Explore and share our stories.</p>
                    </header>
                    <main className="text-center mb-10">
                         <h2 className="text-2xl font-bold text-[#333] mb-2.5">Discover</h2>
                         <p className="text-base text-[#666] mb-10">
                         Find interesting topics.
                         </p>
                         <h2 className="text-2xl font-bold text-[#333] mb-2.5">Experiences</h2>
                         <p className="text-base text-[#666] mb-10">Share your knowledge and experiences by Rating.</p>
                         <h2 className="text-2xl font-bold text-[#333] mb-2.5">Connect</h2>
                         <p className="text-base text-[#666] mb-10">Connect with other writers and readers in meaningful discussions.</p>
                    </main>
               </div>
          </>
     );
}
export default Home;