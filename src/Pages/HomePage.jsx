import React from 'react';
import { CarouselComponent } from '../Components/CarouselComponent';
import { CardPage } from '../Components/CardPage';
import { TechnologyPage } from '../Components/TechnologyPage';
import { HelpYouGetStarted } from '../Components/Services';
import { WebDevelopmentLanding } from '../Components/Features';
import ProfessionalMissionPage from '../Components/Mission&vission';


export const HomePage = () => {
  return (
    <div className=" bg-white">

      <div>
        <CarouselComponent />
      </div>

      {/* Main Content Sections */}
      <div className="mt-2 mb-6 space-y-6">
        
        <div >
          <HelpYouGetStarted />
        </div>

        <div>
          <ProfessionalMissionPage />
        </div>

        <div>
          <WebDevelopmentLanding />
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
