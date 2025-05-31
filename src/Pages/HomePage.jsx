import React from 'react';

import img1 from '../images/img1.avif';
import { CarouselComponent } from '../Components/CarouselComponent';
import { CardPage } from '../Components/CardPage';
import { Intro } from '../Components/Intro';
import { TechnologyPage } from '../Components/TechnologyPage';
import { HelpYouGetStarted } from '../Components/Services';


export const HomePage = () => {
  return (
    <div className="px-4 bg-white">
      <div className="flex flex-col md:flex-row items-center min-h-[70vh]" style={{ backgroundImage: `url(${img1})` }}>
        
          <CarouselComponent/>
        
       
      </div>

       {/* Main Content Sections */}
      <div className="mt-2 mb-6 space-y-6">
        {/* Ensure each section has spacing */}
        <div>
            <Intro/>
        </div>
       <div >
          <HelpYouGetStarted />
        </div> 
        <div >
          <CardPage />
        </div>

        <div>
          <TechnologyPage />
        </div>
      </div>
    </div>
  );
};
