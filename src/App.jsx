/* tailwind css rules for font-size 
text-sm = 14px
text-base = 16px — browser default
text-lg = 18px
text-xl = 20px
text-2xl = 24px
text-3xl = 30px
text-4xl = 36px
text-5sl = 48px
*/

import React from "react";
import Navbar from "./components/Navbar";
import HomeCards from "./components/HomeCards";
import Hero from "./components/Hero";
import Card from "./components/Card";
import JobListings from './components/JobListings'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
