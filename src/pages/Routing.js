import React from "react";
import { Route, Routes } from "react-router-dom";
import Navebar from "./Navebar/Navebar";
import Home from './Home/Home';
import Stories from './Stories-Menu/Stories';
import Footer from './Footer/Footer';
import About from './About/About';
import NotFound from './Notfound/NotFound';
import Story1 from "./Stories/Story1";
import Story2 from "./Stories/Story2";
import Story3 from "./Stories/Story3";
import Story4 from "./Stories/Story4";

const Routing = () => {
     return (
          <>
               <Routes>
                    <Route exact path="/" element={<Navebar />}>
                         <Route index element={<Home />} />
                         <Route exact path="/stories" element={<Stories />} />
                              <Route exact path="stories/story1" element={<Story1 />} />
                              <Route exact path="stories/story2" element={<Story2 />} />
                              <Route exact path="stories/story3" element={<Story3 />} />
                              <Route exact path="stories/story4" element={<Story4 />} />
                         <Route exact path="/about" element={<About />} />
                         <Route path="*" element={<NotFound />} />
                    </Route>
               </Routes>
               <Footer />
          </>
     )
}

export default Routing;