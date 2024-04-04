import { useState } from 'react';
import Nav from './Nav';
import Principal from './Principal';
import Banner from './Banner';
import Button from './Button';
import BestSellers from './BestSellers';
import Category from './Category';
import Properties from './Properties';
import './App.css';



function App() {
  return (
    <>
      <div className="bg-[url('/public/backgroundmovil.png')] md:bg-[url('/public/banner.png')] bg-cover h-full md:h-screen flex flex-col">
        <Nav />

        <Principal />    
      </div>
      <Banner text="Disfruta" subtext="de nuestro buen rollo">
        <div className="btn-contain w-48 h-12">
          <Button description="ORDER NOW" className="bg-[#008BBF] hover:bg-[#00c4ff]" />
        </div>
      </Banner>

      <BestSellers />

      <Category />

      <Banner text="Connect" subtext="with us">
        <div className="btn-contain h-full flex gap-6">
          <div className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center transition duration-150 ease-out hover:ease-in
          hover:scale-110 cursor-pointer">
            <div className="icon-[ph--instagram-logo-bold] w-20 h-10 "></div>
          </div>
          <div className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center transition duration-150 ease-out hover:ease-in
          hover:scale-110 cursor-pointer">
              <div className="icon-[ph--facebook-logo-bold] w-20 h-10"></div>
          </div>
          <div className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center transition duration-150 ease-out hover:ease-in
          hover:scale-110 cursor-pointer">
            <div className="icon-[bi--twitter-x] w-20 h-7"></div>
          </div>
        </div>
      </Banner>

      <Properties />

    </>
  );
}

export default App;
